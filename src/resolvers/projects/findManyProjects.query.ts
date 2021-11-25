import { findManyProjectService } from 'src/services';
import { Project } from 'src/interfaces';

export const findManyProjects = async (): Promise<Project[]> => {
    try {
        return await findManyProjectService();
    } catch (e) {
        console.log(e);
        throw e;
    }
};