import { prisma } from 'src/client';
import { Sprint } from 'src/interfaces';
import { SprintInput } from 'src/types';

export const createOneSprint = async (
    sprintInput: SprintInput
): Promise<Sprint> => {
    const { startDate, endDate, projectId, description } = sprintInput;

    return await prisma.sprint.create({
        data: {
            startDate,
            endDate,
            description,
            projectId,
        },
    });
};
