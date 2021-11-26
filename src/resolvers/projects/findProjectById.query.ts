import { Project } from '.prisma/client';
import { findProjectByIdService } from 'src/services';
import { ProjectInput } from 'src/types';

export const findProjectById = async (parent: any, { id }: Pick<Project, 'id'>): Promise<ProjectInput> => {
    try {
        return await findProjectByIdService(id);
    } catch (e) {
        console.log(e);
        throw e;
    }
};