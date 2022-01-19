import { CreateProjectArgs, Project } from 'src/interfaces';
import { accessLogger, errorLogger } from 'src/logger';
import { createProjectService } from 'src/services';

export const createProject = async (
    parent: any,
    { projectInput }: CreateProjectArgs
): Promise<Project> => {
    try {
        accessLogger.info('createProject');
        return await createProjectService(projectInput);
    } catch(e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
};
