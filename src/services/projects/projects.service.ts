import {
    DuplicateProjectException,
    MissingMandatoryFieldException,
} from 'src/exceptions';
import { Project } from 'src/interfaces';
import { createOneProject, findProjectByName } from 'src/repositories';
import { ProjectInput } from 'src/types';

export const createProjectService = async (
    projectInput: ProjectInput
): Promise<Project> => {
    const { name } = projectInput;
    if (!name) {
        throw new MissingMandatoryFieldException();
    }

    if (await findProjectByName(name)) {
        throw new DuplicateProjectException();
    }

    return await createOneProject(projectInput);
};
