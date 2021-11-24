import { prisma } from 'src/client';
import { Task } from '.prisma/client';
import { TaskInput } from 'src/types';

const createOneTask = async (
    taskInput: TaskInput
): Promise<Task> => {
    const {
        title,
        points,
        priority,
        description,
        /* 
        status,
        sprint,
        project,
        assignedUser,
         */
    } = taskInput;
    console.log('In repo, creating');
    return await prisma.task.create({
        data: {
            title,
            points,
            priority,
            description,
            /*
            status,
            sprint,
            project,
            assignedUser 
             */
        },
        select: {
            id: true,
            title: true,
            description: true,
            // assignedUser: true
        }
    });
};
/**
 * Should be fetched by
 * projectId
 * sprintId
 * title
 * as just title is too weak and redondant
 */
const findOneTaskByKey = (
    /* 
    projectId: string,
    sprintId: string,
     */
    title: string
): Promise<Task | null> => {
    console.log('In repo, finding');
    return prisma.task.findFirst({
        where: {
            /* 
            projectId: projectId,
            sprintId: sprint,
             */
            title
        }
    });
};

export { createOneTask, findOneTaskByKey };