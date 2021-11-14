import { Project } from 'src/interfaces';
import { createOneProject } from 'src/repositories/projects';
import { ProjectInput } from 'src/types';


export const createProjectService= async (projectInput: ProjectInput): Promise<Project> => {
    return await createOneProject(projectInput);
};