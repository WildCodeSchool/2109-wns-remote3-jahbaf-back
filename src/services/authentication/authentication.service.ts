import { DeleteUserArgs, ICreateUserArgs } from '../../interfaces';
import { createOneUser, deleteOneUserById } from '../../repositories';
import { authenticateUser, COOKIE_SETTINGS, createToken } from 'src/utils/auth.utils';
import { Context } from '../../utils/context.utils';
import { formatEmail, hashPassword } from './helpers';
import { ApolloError } from 'apollo-server-express';
import { accessLogger, errorLogger } from '../../logger';
import { UserCouldNotBeAuthenticated, UserCouldNotBeCreated } from 'src/exceptions';

export const signUpService = async ({ email, password, name }: ICreateUserArgs) => {
    accessLogger.info('Trying to signup user', { email });
    const hashedPassword = await hashPassword(password);
    const formatedEmail = formatEmail(email);
    const user = await createOneUser({ email: formatedEmail, password: hashedPassword, name });
    if(!user) {
        errorLogger.error('User could not be signed up', { email });
        throw new UserCouldNotBeCreated();}
    accessLogger.info('User signed up successfully', { email });
    return user;
};


export async function loginService(email: string, password: string, context: Context) {
    accessLogger.info('Trying to authenticate user', { email });
    const user = await authenticateUser({
        email: formatEmail(email),
        password,
    }, context);
    if (!user) {
        errorLogger.error('User could not be authenticated', { email });
        throw new UserCouldNotBeAuthenticated();
    }
    const token = createToken(user);
    context.res.cookie('session_id', token, COOKIE_SETTINGS);
    accessLogger.info('User authenticated successfully', { email });
    return {
        user,
    };
}

export async function deleteUserService({ email, password }: DeleteUserArgs, context: Context) {
    accessLogger.info('Trying to delete user', { email });
    const { id } = await authenticateUser({
        email: formatEmail(email),
        password,
    }, context);
    if (!id) {
        errorLogger.error('User could not be authenticated', { email });
        throw new ApolloError('User could not be authenticated !');}
    await deleteOneUserById({ id }, context.prisma);
    accessLogger.info('User deleted successfully', { email });
}
