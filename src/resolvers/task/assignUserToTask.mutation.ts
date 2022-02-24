import { Task, AssignUserToTaskArgs } from '../../interfaces';
import { assignUserService } from '../../services/index';

export const assignUserToTask = (
    parent: any,
    { taskId, userId }: AssignUserToTaskArgs
): Promise<Task> => {
    return assignUserService(taskId, userId);
};
