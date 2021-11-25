import { AlreadyExistsException } from 'src/exceptions';
import { TaskStatusInput } from 'src/types';
import { createOneTaskStatus, findProjectTaskStatusByName } from 'src/repositories/taskStatus/taskStatus.repository';
import { TaskStatus } from 'src/interfaces';

export const createTaskStatusService = async (taskStatusInput: TaskStatusInput):Promise<TaskStatus> => {
    const { projectId, name } = taskStatusInput;
    if(projectId && await findProjectTaskStatusByName(projectId, name)) {
        throw new AlreadyExistsException();
    }
    return await createOneTaskStatus(taskStatusInput);
};