import { accessLogger } from 'src/logger';
import { logoutService } from 'src/services';
import { Context } from '../../utils/context.utils';

export function logout(parent: any, args: any, context: Context) {
    accessLogger.info('logout');
    logoutService(context);
    accessLogger.info('logout successful');
}