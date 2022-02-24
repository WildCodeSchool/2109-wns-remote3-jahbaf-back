import { prisma } from 'src/client';
import { Task } from '.prisma/client';
import { TaskInput, UpdateTaskInput } from 'src/types';
import { consoleLogger } from 'src/logger';

const createOneTask = async (taskInput: TaskInput): Promise<Task> => {
    return await prisma.task.create({
        data: {
            ...taskInput,
        }
    });
};

const assignUserToTask = async (taskId: string, userId: string): Promise<Task> => {
    return await prisma.task.update({
        where: {
            id: taskId
        },
        data: {
            userId
        }
    })
}
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
    return await prisma.task.findFirst({
        where: {
            title: title,
        },
        include: {
            user: {
                select: {
                    email: true,
                    id: true,
                }
            }
        },
    });
};

const findOneTaskById = async (id: string): Promise<Task | null> => await prisma.task.findUnique({
    where: {
        id
    },
    include: {
        user: {
            select: {
                email: true,
                id: true,
            }
        }
    },
});

const findAllTasksFromProject = async (id: string): Promise<Task[] | null> => await prisma.task.findMany({
    where: {
        projectId: id
    },
    include: {
        user: {
            select: {
                email: true,
                id: true,
            }
        }
    },
});

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

export { createOneTask, findOneTaskByKey, findOneTaskById, updateOneTask, findAllTasksFromProject, assignUserToTask };
