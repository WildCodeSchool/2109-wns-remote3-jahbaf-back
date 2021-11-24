import { Task } from '.prisma/client';
import { CreateTaskArgs } from 'src/interfaces';
import { createTaskService } from 'src/services';

export const createTask = async (parent: unknown, { taskInput }: CreateTaskArgs): Promise<Task | null> => {
    console.log('In mutation');
    try {
        return await createTaskService(taskInput);
    }
    catch (e) {
        console.log(e);
        throw e;
    }
};