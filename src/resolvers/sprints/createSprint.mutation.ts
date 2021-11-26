import { Sprint } from '.prisma/client';
import { CreateSprintArgs } from 'src/interfaces';
import { createSprintService } from 'src/services';

export const createSprint = async (
    parent: any,
    { sprintInput }: CreateSprintArgs
): Promise<Sprint> => {
    return await createSprintService(sprintInput);
};
