import { Task } from 'src/interfaces';
import { accessLogger, errorLogger } from 'src/logger';
import { selectOneTaskService } from 'src/services';

export const selectOneTask = async (
    parent: unknown,
    { id }: { [id: string]: string }
): Promise<Task | null> => {
    try {
        accessLogger.info('selectOneTask');
        return await selectOneTaskService(id);
    } catch (e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
};
