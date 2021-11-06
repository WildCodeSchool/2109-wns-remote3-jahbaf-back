import { ICreateUserArgs } from 'src/interfaces';
import { signUpService } from 'src/services';

/* eslint @typescript-eslint/no-explicit-any: 0 */
export const signUp = async (parent: any, signUpArgs: ICreateUserArgs) => {
    try {
        const user = signUpService(signUpArgs);
        return { user };
    } catch (e) {
        e;
        throw e;
    }
};
