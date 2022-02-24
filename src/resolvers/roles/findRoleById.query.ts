import { Role } from 'src/interfaces';
import { accessLogger, errorLogger } from 'src/logger';
import { findRoleByIdService } from 'src/services';

export const findRoleById = async (_parent: any, { id, projectId }: Omit<Role, 'name'>): Promise<Role> => {
    try {
        accessLogger.info('findRoleById');
        return await findRoleByIdService({id, projectId});
    } catch (e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
};