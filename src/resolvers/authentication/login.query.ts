import { accessLogger, errorLogger } from 'src/logger';
import { loginService } from 'src/services';
import { Context } from 'src/utils/context.utils';

interface LoginArgs {
  email: string,
  password: string,
}

async function login(parent: any, { email, password }: LoginArgs, context: Context) {
    try {
        accessLogger.info('login');
        const user = await loginService(email, password, context);
        return user;
    } catch(e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
}

export { login };
