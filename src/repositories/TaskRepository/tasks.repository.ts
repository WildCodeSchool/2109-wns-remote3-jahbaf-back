import { prisma } from 'src/client';
import { Task } from '.prisma/client';
import { TaskInput } from 'src/types';

const createOneTask = async (taskInput: TaskInput): Promise<Task> => {
    const { title } = taskInput; // add other fields
    return await prisma.task.create({
        data: {
            title
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
            title: title
        }
    });
};

const findOneTaskById = async (id : string): Promise<Task | null> => await prisma.task.findUnique({where: { id }});

export { createOneTask, findOneTaskByKey, findOneTaskById };