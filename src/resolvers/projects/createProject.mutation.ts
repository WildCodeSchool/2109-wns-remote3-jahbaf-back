import { CreateProjectArgs, ProjectCreatePayLoad } from 'src/interfaces';
import { createProjectService } from 'src/services';

export const createProject = async (
    parent: any,
    { projectInput }: CreateProjectArgs
): Promise<ProjectCreatePayLoad> => {
    const project = await createProjectService(projectInput);
    return { project };
};
