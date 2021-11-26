import { MissingMandatoryFieldException } from 'src/exceptions';
import { Project } from 'src/interfaces';
import { createOneProject, findManyProjects } from 'src/repositories';
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

export const findManyProjectService = async (): Promise<Project[]> => {
    console.log('Trying to fetch many projects !');
    return await findManyProjects();
};
