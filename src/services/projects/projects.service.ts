import { MissingMandatoryFieldException, ProjectNotFoundException } from 'src/exceptions';
import { Project } from 'src/interfaces';
import { createOneProject, findManyProjects, findOneProject } from 'src/repositories';
import { ProjectInput } from 'src/types';

export const createProjectService = async (
    projectInput: ProjectInput
): Promise<Project> => {
    const { name } = projectInput;
    if (!name) {
        throw new MissingMandatoryFieldException();
    }
    return await createOneProject(projectInput);
};

export const findManyProjectService = async (): Promise<ProjectInput[]> => {
    console.log('Trying to fetch many projects !');
    const manyProjects = await findManyProjects();
    console.log('Projects fetched successfully !');
    return manyProjects;
};

export const findOneProjectService = async (id: string): Promise<ProjectInput> => {
    console.log('Trying to fetch one project !');
    const oneProject = await findOneProject(id);
    if(!oneProject) throw new ProjectNotFoundException();
    console.log('Project fetched successfully !');
    return oneProject;
};