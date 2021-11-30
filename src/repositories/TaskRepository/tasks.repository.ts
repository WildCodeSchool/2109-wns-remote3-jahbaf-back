import { prisma } from 'src/client';
import { Task } from '.prisma/client';
import { TaskInput, UpdateTaskInput } from 'src/types';

const createOneTask = async (taskInput: TaskInput): Promise<Task> => {
    return await prisma.task.create({
        data: {
            ...taskInput,
        },
        /* select: {
            id: true,
            title: true,
        } */
    });
};
/**
 * Should be fetched by
 * projectId
 * sprintId
 * title
 * as just title is too weak and redondant
 */
const findOneTaskByKey = async (
    /* 
    projectId: string,
     */
    title: string
): Promise<Task | null> => {
    console.log('In repo, finding');
    return await prisma.task.findFirst({
        where: {
            /* 
            projectId: projectId,
            sprintId: sprint,
             */
            title: title,
        },
    });
};

const findOneTaskById = async (id: string): Promise<Task | null> =>
    await prisma.task.findUnique({ where: { id } });

const updateOneTask = async (
    taskUpdateInput: UpdateTaskInput
): Promise<Task> => {
    return await prisma.task.update({
        where: {
            id: taskUpdateInput.id,
        },
        data: {
            ...taskUpdateInput,
        },
    });
};

export { createOneTask, findOneTaskByKey, findOneTaskById, updateOneTask };
