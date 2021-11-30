import { AssignTaskStatusArgs, Task } from 'src/interfaces';
import { assignTaskStatusService } from 'src/services';

export const assignTaskStatus = (
    parent: any,
    { taskId, taskStatusId }: AssignTaskStatusArgs
): Promise<Task> => {
    return assignTaskStatusService(taskId, taskStatusId);
};
