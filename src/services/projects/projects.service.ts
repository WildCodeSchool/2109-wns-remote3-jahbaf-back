import {
    MissingMandatoryFieldException,
    ProjectNotFoundException,
} from 'src/exceptions';
import { Project } from 'src/interfaces';
import {
    createOneProject,
    findManyProjects,
    findProjectById,
    updateOneProject,
} from 'src/repositories';
import { ProjectInput, UpdateProjectInput } from 'src/types';

export const createProjectService = async (
    projectInput: ProjectInput
): Promise<Project> => {
    const { name } = projectInput;
    if (!name) {
        throw new MissingMandatoryFieldException();
    }
    return await createOneProject(projectInput);
};

export const updateProjectService = async (
    projectInput: UpdateProjectInput
): Promise<Project> => {
    if (!(await findProjectByIdService(projectInput.id))) {
        throw new ProjectNotFoundException();
    }
    return await updateOneProject(projectInput);
};

export const findManyProjectService = async (): Promise<Project[]> => {
    console.log('Trying to fetch many projects !');
    const manyProjects = await findManyProjects();
    console.log('Projects fetched successfully !');
    return manyProjects;
};

export const findProjectByIdService = async (id: string): Promise<Project> => {
    console.log('Trying to fetch one project !');
    const project = await findProjectById(id);
    if (!project) throw new ProjectNotFoundException();
    console.log('Project fetched successfully !');
    return project;
};
