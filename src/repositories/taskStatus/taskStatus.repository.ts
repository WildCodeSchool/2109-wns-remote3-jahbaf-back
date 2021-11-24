import { prisma } from 'src/client';
import { TaskStatusInput } from 'src/types';

export const createOneTaskStatus = (taskStatusInput: TaskStatusInput) => {
    const { name } = taskStatusInput;
    prisma.taskStatus.create({
        data: {
            name,
        },
        select: {
            id: true,
            name: true,
        },
    });
};