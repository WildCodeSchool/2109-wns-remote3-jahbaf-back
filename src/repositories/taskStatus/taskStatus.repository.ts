import { prisma } from 'src/client';
import { TaskStatus } from 'src/interfaces';
import { TaskStatusInput } from 'src/types';

export const createOneTaskStatus = async (taskStatusInput: TaskStatusInput): Promise<TaskStatus> => {
    const { name } = taskStatusInput;
    return await prisma.taskStatus.create({
        data: {
            name,
        },
        select: {
            id: true,
            name: true,
        },
    });
};