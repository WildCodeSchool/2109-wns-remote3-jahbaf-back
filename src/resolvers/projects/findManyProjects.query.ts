import { findManyProjectService } from 'src/services';
import { ProjectInput } from 'src/types';

export const findManyProjects = async (): Promise<ProjectInput[]> => {
    try {
        return await findManyProjectService();
    } catch (e) {
        console.log(e);
        throw e;
    }
};