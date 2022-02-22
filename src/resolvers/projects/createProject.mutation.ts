import { UserNotFoundException } from 'src/exceptions';
import { CreateProjectArgs, Project } from 'src/interfaces';
import { accessLogger, errorLogger } from 'src/logger';
import { createProjectService } from 'src/services';
import { Context } from 'src/utils/context.utils';

export const createProject = async (
    parent: any,
    { projectInput }: CreateProjectArgs,
    context: Context
): Promise<Project> => {
    try {
        const { userId } = context;
        if(!userId) throw new UserNotFoundException();
        accessLogger.info('createProject');
        return await createProjectService({...projectInput, userId });
    } catch(e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
};
