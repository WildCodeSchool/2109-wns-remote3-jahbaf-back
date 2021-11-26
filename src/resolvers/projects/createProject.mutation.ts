import { CreateProjectArgs, Project } from 'src/interfaces';
import { createProjectService } from 'src/services';

export const createProject = async (
    parent: any,
    { projectInput }: CreateProjectArgs
): Promise<Project> => {
    return await createProjectService(projectInput);
};
