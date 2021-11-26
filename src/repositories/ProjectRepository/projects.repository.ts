import { prisma } from 'src/client';
import { Project } from '.prisma/client';
import { ProjectInput } from 'src/types';

export const createOneProject = async (
    projectInput: ProjectInput
): Promise<Project> => {
    const { name, description, published } = projectInput;
    return await prisma.project.create({
        data: {
            name,
            description: description || '',
            published,
        },
        /* select: {
            id: true,
            name: true,
            description: true,
            published: true,
        }, */
    });
};

export const findManyProjects = async () => {
    return await prisma.project.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            published: true,
            sprint: true,
            tasks: true,
            projectUsers: true,
            taskStatus: true,
        },
    });
};

export const findProjectById = async (id: string) => {
    return await prisma.project.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            description: true,
            published: true,
            sprint: true,
            tasks: true,
            projectUsers: true,
            taskStatus: true
        }
    });
};
