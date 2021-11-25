import { MissingMandatoryFieldException } from 'src/exceptions';
import { Project } from 'src/interfaces';
import { createOneProject } from 'src/repositories';
import { ProjectInput } from 'src/types';

export const createProjectService = async (
    projectInput: ProjectInput
): Promise<Project> => {
    const { name } = projectInput;
    if (!name) {
        throw new MissingMandatoryFieldException('name is mandatory');
    }

    return await createOneProject(projectInput);
};
