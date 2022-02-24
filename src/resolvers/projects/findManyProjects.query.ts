import { findManyProjectService } from 'src/services';
import { Project } from 'src/interfaces';
import { accessLogger, errorLogger } from 'src/logger';

export const findManyProjects = async (parent: any): Promise<Project[]> => {
    try {
        accessLogger.info('findManyProjects');
        return await findManyProjectService();
    } catch (e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
};
