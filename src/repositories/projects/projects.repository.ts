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
            description,
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

export const findProjectByName = async (
    projectName: string
): Promise<Project | null> => {
    return prisma.project.findFirst({
        where: {
            name: projectName,
        },
    });
};
