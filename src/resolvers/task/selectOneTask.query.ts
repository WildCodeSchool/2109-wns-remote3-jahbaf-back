import { Task } from '.prisma/client';
import { selectOneTaskService } from 'src/services';

export const selectOneTask = async (
    parent: unknown,
    { id }: { [id: string]: string }
): Promise<Task | null> => {
    try {
        return await selectOneTaskService(id);
    } catch (e) {
        console.log(e);
        throw e;
    }
};
