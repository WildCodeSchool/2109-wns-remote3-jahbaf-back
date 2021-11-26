import { TaskStatus } from '.prisma/client';
import { prisma } from 'src/client';
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

export const findProjectTaskStatusByName = async(projectId: string, name: string): Promise<TaskStatus | null> => {
    return await prisma.taskStatus.findFirst({
        where: {
            projectId,
            name
        },
    });
};
