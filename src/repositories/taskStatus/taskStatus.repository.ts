import { prisma } from 'src/client';
import { TaskStatus } from 'src/interfaces';
import { TaskStatusInput } from 'src/types';

export const createOneTaskStatus = async (taskStatusInput: TaskStatusInput): Promise<TaskStatus> => {
    const { name, projectId } = taskStatusInput;
    
    return await prisma.taskStatus.create({
        data: {
            name,
            projectId,
        },
        select: {
            id: true,
            name: true,
            projectId: true,
        },
    });
};
