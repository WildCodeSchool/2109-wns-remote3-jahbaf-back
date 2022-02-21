import { ICreateUserArgs } from 'src/interfaces';
import { accessLogger, errorLogger } from 'src/logger';
import { signUpService } from 'src/services';
import { Context } from '../../utils/context.utils';

export const signUp = async (parent: any, signUpArgs: ICreateUserArgs, context: Context) => {
    try {
        accessLogger.info('signUp');
        const user = signUpService(signUpArgs, context);
        return { user };
    } catch (e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
};
