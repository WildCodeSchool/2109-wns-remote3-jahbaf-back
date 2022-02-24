import { Project } from '.prisma/client';
import { accessLogger, errorLogger } from 'src/logger';
import { findProjectByIdService } from 'src/services';
import { ProjectInput } from 'src/types';

export const findProjectById = async (
    parent: any,
    { id }: Pick<Project, 'id'>
): Promise<ProjectInput> => {
    try {
        accessLogger.info('findProjectById');
        return await findProjectByIdService(id);
    } catch (e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
};
