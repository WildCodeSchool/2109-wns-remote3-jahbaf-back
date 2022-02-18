import { Task } from 'src/interfaces';
import { selectAllTasksFromProjectService } from 'src/services';

export const selectAllTasksFromProject = async (
    parent: unknown,
    { id }: { [id: string]: string }
): Promise<Task[] | null> => {
    return await selectAllTasksFromProjectService(id);
};
