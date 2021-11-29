import { prisma } from 'src/client';
import { Project } from '.prisma/client';
import { ProjectInput, UpdateProjectInput } from 'src/types';

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
    });
};

export const updateOneProject = async (
    projectInput: UpdateProjectInput
): Promise<Project> => {
    return await prisma.project.update({
        where: {
            id: projectInput.id,
        },
        data: {
            ...projectInput,
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
            sprint: true,
            createdAt: true,
            tasks: true,
            projectUsers: true,
            taskStatus: true,
        },
    });
};

export const findProjectById = async (id: string) => {
    return await prisma.project.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            name: true,
            description: true,
            published: true,
            sprint: true,
            tasks: true,
            projectUsers: true,
            taskStatus: true,
            createdAt: true,
        },
    });
};
