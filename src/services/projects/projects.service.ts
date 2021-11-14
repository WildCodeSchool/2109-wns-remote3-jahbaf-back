import { Project } from 'src/interfaces';
import { createOneProject, findProjectByName } from 'src/repositories/projects';
import { ProjectInput } from 'src/types';

export const createProjectService = async (
    projectInput: ProjectInput
): Promise<Project | null> => {
    let createdProject: Project | null = null;
    const { name } = projectInput;
    if (!(await findProjectByName(name))) {
        createdProject = await createOneProject(projectInput);
    }
    return createdProject;
};
