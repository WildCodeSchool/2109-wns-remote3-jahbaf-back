import { ICreateUserArgs } from 'src/interfaces';
import { loginUserService } from '../../services/auth/authentication.service';
import { Context } from 'src/services/auth/context.service';

async function login(parent: any, { email,
    password }: Pick<ICreateUserArgs, 'email' | 'password'>, context: Context) {
    try {
        console.info('Trying to authenticate', { email });
        const user = loginUserService(email, password, context);
        console.info('Authentication success', { email });
        return {
            user,
        };
    } catch (e: unknown) {
        throw new Error('Authentication error');
    }
}

export { login };


