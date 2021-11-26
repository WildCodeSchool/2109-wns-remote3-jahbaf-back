import { Task } from 'src/interfaces';
import {
    createOneTask,
    findOneTaskById,
    updateOneTask,
} from 'src/repositories/TaskRepository';
import { TaskInput, UpdateTaskInput } from 'src/types';
import {
    MissingMandatoryFieldException,
    UnknownTaskStatusException,
} from 'src/exceptions';
import { UnknownTaskException } from 'src/exceptions';
import { findOneProjectTaskStatusById } from 'src/repositories';

export const createTaskService = async (
    taskInput: TaskInput
): Promise<Task> => {
    const { title, projectId } = taskInput;
    if (!title || !projectId) throw new MissingMandatoryFieldException();
    return await createOneTask(taskInput);
};

export const selectOneTaskService = async (id: string): Promise<Task | null> =>
    await findOneTaskById(id);

export const updateTaskService = async (
    updateInput: UpdateTaskInput
): Promise<Task> => {
    return await updateOneTask(updateInput);
};

export const assignTaskStatusService = async (
    taskId: string,
    taskStatusId: string
): Promise<Task> => {
    if (!(await findOneTaskById(taskId))) {
        throw new UnknownTaskException();
    }
    if (!(await findOneProjectTaskStatusById(taskStatusId))) {
        throw new UnknownTaskStatusException();
    }
    const updateInput: UpdateTaskInput = {
        id: taskId,
        statusId: taskStatusId,
    };
    return await updateOneTask(updateInput);
};
