import { TaskAlreadyExistsException } from 'src/exceptions';
import { TaskStatusInput } from 'src/types';
import { createOneTaskStatus, findProjectTaskStatusByName, findManyTaskStatus } from 'src/repositories';
import { TaskStatus } from 'src/interfaces';

export const createTaskStatusService = async (taskStatusInput: TaskStatusInput):Promise<TaskStatus> => {
    const { projectId, name } = taskStatusInput;
    if(projectId && await findProjectTaskStatusByName(projectId, name)) {
        throw new TaskAlreadyExistsException();
    }
    return await createOneTaskStatus(taskStatusInput);
};

export const findManyTaskStatusService = async (): Promise<TaskStatus[]> => {
    return await findManyTaskStatus();
};