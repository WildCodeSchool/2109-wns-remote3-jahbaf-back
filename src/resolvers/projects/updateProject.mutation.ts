import { Project, UpdateProjectArgs } from 'src/interfaces';
import { accessLogger, errorLogger } from 'src/logger';
import { updateProjectService } from 'src/services';

export const updateProject = async (
    parent: any,
    { projectInput }: UpdateProjectArgs
): Promise<Project> => {
    try {
        accessLogger.info('updateProject');
        return await updateProjectService(projectInput);
    } catch (e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
};
