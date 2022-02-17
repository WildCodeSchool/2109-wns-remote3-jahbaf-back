import { accessLogger, errorLogger } from 'src/logger';
import { deleteUserService } from '../../services';
import { Context } from '../../utils/context.utils';

export interface DeleteUserArgs {
  email: string,
  password: string,
}

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
