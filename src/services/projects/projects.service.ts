import {
    MissingMandatoryFieldException,
    ProjectNotFoundException,
} from 'src/exceptions';
import { Project } from 'src/interfaces';
import { consoleLogger } from 'src/logger';
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
    if (!name || !name.length) {
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
    consoleLogger.info('Trying to fetch many projects !');
    const manyProjects = await findManyProjects();
    consoleLogger.info('Projects fetched successfully !');
    return manyProjects;
};

export const findProjectByIdService = async (id: string): Promise<Project> => {
    consoleLogger.info('Trying to fetch one project !');
    const project = await findProjectById(id);
    if (!project) throw new ProjectNotFoundException();
    consoleLogger.info('Project fetched successfully !');
    return project;
};
