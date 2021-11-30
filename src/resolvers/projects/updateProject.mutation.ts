import { Project, UpdateProjectArgs } from 'src/interfaces';
import { updateProjectService } from 'src/services';

export const updateProject = async (
    parent: any,
    { projectInput }: UpdateProjectArgs
): Promise<Project> => {
    return await updateProjectService(projectInput);
};
