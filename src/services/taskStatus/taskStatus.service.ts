import { TaskStatusInput } from 'src/types';
import { createOneTaskStatus } from 'src/repositories/taskStatus/taskStatus.repository';
import { TaskStatus } from 'src/interfaces';

export const createTaskStatusService = async (taskStatusInput: TaskStatusInput):Promise<TaskStatus> => {
    return await createOneTaskStatus(taskStatusInput);  
};