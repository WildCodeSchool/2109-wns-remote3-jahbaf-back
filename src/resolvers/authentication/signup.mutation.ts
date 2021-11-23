import { ApolloError } from 'apollo-server-errors';
import { ICreateUserArgs } from 'src/interfaces';
import { signUpService } from 'src/services';

/* eslint @typescript-eslint/no-explicit-any: 0 */
export const signUp = async (parent: any, signUpArgs: ICreateUserArgs) => {
    try {
        const { email} = signUpArgs;
        console.info('Authentication success', { email });
        const user = signUpService(signUpArgs);
        console.info('Authentication success', { email });
        return { user };
    } catch (e: unknown) {
        throw new ApolloError('An error has occured while creating a new user',);
    }
};
