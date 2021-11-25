import { Project } from '.prisma/client';
import { findOneProjectService } from 'src/services';
import { ProjectInput } from 'src/types';

export const findOneProject = async (parent: any, { id }: Pick<Project, 'id'>): Promise<ProjectInput> => {
    try {
        return await findOneProjectService(id);
    } catch (e) {
        console.log(e);
        throw e;
    }
};