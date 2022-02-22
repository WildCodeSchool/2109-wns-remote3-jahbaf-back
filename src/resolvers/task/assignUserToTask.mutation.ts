import { AssignUserToTaskArgs, Task } from 'src/interfaces';
import { assignUserToTaskService } from 'src/services';

export const assignUserToTask = (
    parent: any,
    { taskId, userId }: AssignUserToTaskArgs
): Promise<Task> => {
    return assignUserToTaskService(taskId, userId);
};
