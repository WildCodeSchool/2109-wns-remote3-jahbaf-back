import { Task } from '.prisma/client';
import {
    createOneTask,
    findOneTaskById,
} from 'src/repositories/TaskRepository';
import { TaskInput } from 'src/types';
import { MissingMandatoryFieldException } from 'src/exceptions';

export const createTaskService = async (
    taskInput: TaskInput
): Promise<Task> => {
    const { title, projectId } = taskInput;
    if (!title || !projectId) throw new MissingMandatoryFieldException();
    return await createOneTask(taskInput);
};

export const selectOneTaskService = async (id: string): Promise<Task | null> =>
    await findOneTaskById(id);
