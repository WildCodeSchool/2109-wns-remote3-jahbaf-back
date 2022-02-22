import { Role, UpdateRoleArgs } from 'src/interfaces';
import { accessLogger, errorLogger } from 'src/logger';
import { updateRoleService } from 'src/services';

export const updateRole = async (
    _parent: any,
    { roleInput }: UpdateRoleArgs
): Promise<Role> => {
    try {
        accessLogger.info('updateRole');
        return await updateRoleService(roleInput);
    } catch (e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
};
