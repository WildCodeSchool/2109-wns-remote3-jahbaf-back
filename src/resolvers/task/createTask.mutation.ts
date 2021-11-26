import { Task } from '.prisma/client';
import { CreateTaskArgs } from 'src/interfaces';
import { createTaskService } from 'src/services';

export const createTask = async (
    parent: unknown,
    { taskInput }: CreateTaskArgs
): Promise<Task> => await createTaskService(taskInput);
