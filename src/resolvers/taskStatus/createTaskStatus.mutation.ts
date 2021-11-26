import { CreateTaskStatusArgs, TaskStatus } from 'src/interfaces';
import { createTaskStatusService } from 'src/services';

export const createTaskStatus = async (parent: any, { taskStatusInput }: CreateTaskStatusArgs):Promise<TaskStatus> => {
    return await createTaskStatusService(taskStatusInput);
};