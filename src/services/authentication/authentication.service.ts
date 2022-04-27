import { DeleteUserArgs, ICreateUserArgs } from '../../interfaces';
import { createOneUser, deleteOneUserById, oneUserByEmail, oneUserById, updateOneUserById } from '../../repositories';
import { authenticateUser, createToken, getTokenPayload, isTokenExpired } from 'src/utils/auth.utils';
import { formatEmail, hashPassword } from './helpers';
import { accessLogger, errorLogger } from '../../logger';
import {
    ExpiredToken,
    UserCouldNotBeAuthenticated,
    UserCouldNotBeCreated,
} from 'src/exceptions';
import { createMailingURL, sendConfirmationEmail } from '../mailing/signupConfirmation';
import { Routes } from 'src/utils/constants/Routes.enum';

export const signUpService = async ({
    email,
    password,
    name,
}: ICreateUserArgs) => {
    accessLogger.info('Trying to signup user', { email });
    const isEmailTaken = await oneUserByEmail({ email });
    if (isEmailTaken) {
        throw new UserCouldNotBeCreated('Email is already taken');
    }
    const hashedPassword = await hashPassword(password);
    const formattedEmail = formatEmail(email);
    const user = await createOneUser({
        email: formattedEmail,
        password: hashedPassword,
        name,
    });
    if (!user) {
        errorLogger.error('User could not be signed up', { email });
        throw new UserCouldNotBeCreated();
    }
    const token = createToken(user);
    try {
        await sendConfirmationEmail(email, createMailingURL(token, Routes.CONFIRM_ACCOUNT));
    } catch(e) {
        console.error(e);
    }
    accessLogger.info('User signed up successfully', { email });
    return token;
};

export async function loginService(email: string, password: string) {
    accessLogger.info('Trying to authenticate user', { email });
    const user = await authenticateUser({
        email: formatEmail(email),
        password,
    });

    if (!user) {
        errorLogger.error('User could not be authenticated', { email });
        throw new UserCouldNotBeAuthenticated();
    }
    const token = createToken(user);
    accessLogger.info('User authenticated successfully', { email });
    return token;
}

export async function deleteUserService({ email, password }: DeleteUserArgs) {
    accessLogger.info('Trying to delete user', { email });
    const { id } = await authenticateUser({
        email: formatEmail(email),
        password,
    });
    if (!id) {
        errorLogger.error('User could not be authenticated', { email });
        throw new UserCouldNotBeAuthenticated(
            'User could not be authenticated !'
        );
    }
    await deleteOneUserById({ id });
    accessLogger.info('User deleted successfully', { email });
}

export async function confirmAccountService(token: string) {
    accessLogger.info('Trying to confirm account', { token });
    const { userId, expiresIn, emittedAt } = getTokenPayload(token);
    const isExpired = isTokenExpired(expiresIn, emittedAt);
    if (isExpired) throw new ExpiredToken('Token expired');
    const user = await oneUserById({ id: userId });
    if (!user) throw new UserCouldNotBeAuthenticated('User could not be found');
    const updatedUser = await updateOneUserById({ id: userId, data: { confirmed: true } });
    if(!updatedUser) throw new UserCouldNotBeAuthenticated('User could not be updated');
    accessLogger.info('Trying to confirm account', { token });
    return token;
}