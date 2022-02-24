import { Task } from 'src/interfaces';
import {
    createOneTask,
    findOneTaskById,
    findAllTasksFromProject,
    updateOneTask,
    assignUserToTask,
} from 'src/repositories/TaskRepository';
import { TaskInput, UpdateTaskInput } from 'src/types';
import {
    MissingMandatoryFieldException,
    TaskNotUpdatedException,
    UnknownTaskStatusException,
    UserNotFoundException,
} from 'src/exceptions';
import { UnknownTaskException } from 'src/exceptions';
import { findOneProjectTaskStatusById, oneUserById } from 'src/repositories';

export const createTaskService = async (
    taskInput: TaskInput
): Promise<Task> => {
    const { title, projectId } = taskInput;
    if (!title || !projectId) throw new MissingMandatoryFieldException();
    return await createOneTask(taskInput);
};

export const selectOneTaskService = async (id: string): Promise<Task | null> =>
    await findOneTaskById(id);

export const selectAllTasksFromProjectService = async (
    id: string
): Promise<Task[] | null> => await findAllTasksFromProject(id);

export const assignUserToTaskService = async (
    taskId: string,
    userId: string
): Promise<Task> => {
    if (!(await oneUserById({ id: userId }))) {
        throw new UserNotFoundException();
    }
    if (!(await findOneTaskById(taskId))) {
        throw new UnknownTaskException();
    }

    const task = await assignUserToTask(taskId, userId);
    if (!task) throw new TaskNotUpdatedException();

    return task;
};

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

export const assignUserService = async (
    taskId: string,
    userId: string
): Promise<Task> => {
    if (!(await findOneTaskById(taskId))) {
        throw new UnknownTaskException();
    }
    if (!(await oneUserById({ id: userId }))) {
        throw new UserNotFoundException();
    }
    const updateInput: UpdateTaskInput = {
        id: taskId,
        userId,
    };
    return await updateOneTask(updateInput);
};
