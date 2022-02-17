import { ICreateUserArgs } from 'src/interfaces';
import { accessLogger, errorLogger } from 'src/logger';
import { signUpService } from 'src/services';

export const signUp = async (parent: any, signUpArgs: ICreateUserArgs) => {
    try {
        accessLogger.info('signUp');
        const user = signUpService(signUpArgs);
        return { user };
    } catch (e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
};
