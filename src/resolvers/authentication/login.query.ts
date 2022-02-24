import { LoginArgs } from '../../interfaces';
import { accessLogger, errorLogger } from '../../logger';
import { loginService } from '../../services';

async function login(parent: any, { email, password }: LoginArgs) {
    try {
        accessLogger.info('login');
        const token = await loginService(email, password);
        return token;
    } catch(e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
}

export { login };
