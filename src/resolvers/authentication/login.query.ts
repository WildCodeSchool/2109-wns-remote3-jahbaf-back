import { LoginArgs } from '../../interfaces';
import { accessLogger, errorLogger } from '../../logger';
import { loginService } from '../../services';
import { Context } from '../../utils/context.utils';

async function login(parent: any, { email, password }: LoginArgs, context: Context) {
    try {
        accessLogger.info('login');
        const token = await loginService(email, password, context);
        return token;
    } catch(e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
}

export { login };
