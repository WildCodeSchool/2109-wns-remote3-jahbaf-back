
import { Context } from '../../services/auth/context.service';
import { COOKIE_SETTINGS } from '../../services';

async function logout(parent: any, args: void, context: Context) {
    try {
        context.res.clearCookie('session_id', COOKIE_SETTINGS);
        console.info('Logout success');
    } catch(e) {
        console.log(e);
    }
}

export { logout };
