import { Sprint } from '.prisma/client';
import { createOneSprint } from 'src/repositories';
import { SprintInput } from 'src/types';

export const createSprintService = async (
    sprintInput: SprintInput
): Promise<Sprint> => {
    return await createOneSprint(sprintInput);
};
