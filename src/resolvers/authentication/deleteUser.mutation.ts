import { DeleteUserArgs } from '../../interfaces';
import { accessLogger, errorLogger } from '../../logger';
import { deleteUserService } from '../../services';
import { Context } from '../../utils/context.utils';

export async function deleteUser(parent: any, { email, password }: DeleteUserArgs, context: Context) {
    try {
        accessLogger.info('deleteUser');
        await deleteUserService({email, password}, context);
        return { message: 'User deleted successfully' };
    } catch(e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
}
