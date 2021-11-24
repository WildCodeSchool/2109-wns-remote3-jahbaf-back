import { Task } from '.prisma/client';
import { CreateTaskArgs } from 'src/interfaces';
import { createTaskService } from 'src/services';

export const createTask = async ({ taskInput }: CreateTaskArgs): Promise<Task | null> => {
    console.log('In mutation');
    return await createTaskService(taskInput);
};