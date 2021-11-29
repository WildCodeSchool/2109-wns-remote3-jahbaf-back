import { Sprint } from '.prisma/client';
import { ProjectNotFoundException } from 'src/exceptions';
import { createOneSprint } from 'src/repositories';
import { SprintInput } from 'src/types';
import { findProjectByIdService } from '..';

export const createSprintService = async (
    sprintInput: SprintInput
): Promise<Sprint> => {
    const { projectId } = sprintInput;
    if (!(await findProjectByIdService(projectId))) {
        throw new ProjectNotFoundException();
    }
    return await createOneSprint(sprintInput);
};
