import { InvalidEmailException } from 'src/exceptions';
import { ICreateUserArgs } from 'src/interfaces';
import { createOneUser } from 'src/repositories';
import { formatEmail, hashPassword, isEmailValid } from './helpers';

export const signUpService = async ({ email, password, name }: ICreateUserArgs) => {
    const hashedPassword = await hashPassword(password);

    if(!isEmailValid(email)) throw new InvalidEmailException();
    
    const formatedEmail = formatEmail(email);
    const user = await createOneUser({ email: formatedEmail, password: hashedPassword, name });
    return user;
};
