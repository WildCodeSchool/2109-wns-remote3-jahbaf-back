import { Task, AssignUserArgs } from 'src/interfaces';
import { assignUserService } from 'src/services';

export const assignUser = (
    parent: any,
    { taskId, userId }: AssignUserArgs
): Promise<Task> => {
    return assignUserService(taskId, userId);
};
