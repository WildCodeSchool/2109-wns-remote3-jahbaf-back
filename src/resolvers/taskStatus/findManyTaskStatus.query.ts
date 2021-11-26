import { findManyTaskStatusService } from 'src/services';
import { TaskStatus } from 'src/interfaces';

export const findManyTaskStatus = async (): Promise<TaskStatus[]> => {
    try {
        return await findManyTaskStatusService();
    } catch (err) {
        console.log(err);
        throw err;
    }
};