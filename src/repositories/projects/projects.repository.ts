import { prisma } from 'src/client';
import { Project } from 'src/interfaces';
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
        select: {
            id: true,
            name: true,
            description: true,
            published: true,
        },
    });
};

export const findManyProjects = async () => {
    return await prisma.project.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            published: true,
            Sprint: true,
            tasks: true,
            project_users: true,
            TaskStatus: true
        }
    });
};

export const findOneProject = async (id: string) => {
    return await prisma.project.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            description: true,
            published: true,
            Sprint: true,
            tasks: true,
            project_users: true,
            TaskStatus: true
        }
    });
};