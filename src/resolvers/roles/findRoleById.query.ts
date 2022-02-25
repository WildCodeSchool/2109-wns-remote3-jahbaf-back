import { Role } from 'src/interfaces';
import { accessLogger, errorLogger } from 'src/logger';
import { findRoleByIdService } from 'src/services';

export const findRoleById = async (
    _parent: any,
    { id }: Pick<Role, 'id'>
): Promise<Role> => {
    try {
        accessLogger.info('findRoleById');
        return await findRoleByIdService({ id });
    } catch (e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
};
