import { Task, AssignUserArgs } from '../../interfaces';
import { assignUserService } from '../../services/index';

export const assignUserToTask = (
    parent: any,
    { taskId, userId }: AssignUserArgs
): Promise<Task> => {
    return assignUserService(taskId, userId);
};
