import { Role } from 'src/interfaces';
import { accessLogger, errorLogger } from 'src/logger';
import { findAllRoleByProjectService } from 'src/services';

export const findAllRolesFromProject = async (_parent: any, projectId: string): Promise<Role[]> => {
    try {
        accessLogger.info('findRoleById');
        return await findAllRoleByProjectService(projectId);
    } catch (e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
};