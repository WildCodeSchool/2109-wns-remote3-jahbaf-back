import { DeleteUserArgs } from '../../interfaces';
import { accessLogger, errorLogger } from '../../logger';
import { deleteUserService } from '../../services';

export async function deleteUser(parent: any, { email, password }: DeleteUserArgs) {
    try {
        accessLogger.info('deleteUser');
        await deleteUserService({email, password});
    } catch(e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
}
