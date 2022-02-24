import { CreateRoleArgs, Role } from 'src/interfaces';
import { accessLogger, errorLogger } from 'src/logger';
import { createRoleService } from 'src/services';

export const createRole = async (
    _parent: any,
    { roleInput }: CreateRoleArgs
): Promise<Role> => {
    try {
        accessLogger.info('createRole');
        return await createRoleService(roleInput);
    } catch(e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
};
