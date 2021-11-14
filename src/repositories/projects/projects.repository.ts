import { prisma } from 'src/client';
import { Project } from 'src/interfaces';
import { ProjectInput } from 'src/types';

const createOneProject = async (
    projectInput: ProjectInput
): Promise<Project> => {
    const { name } = projectInput;
    console.log('CREATING A NEW PROJECT THROUGH PRISMA');
    return await prisma.project.create({
        data: {
            name,
        },
        select: {
            id: true,
            name: true,
        },
    });
};

const findProjectByName = async (
    projectName: string
): Promise<Project | null> => {
    return prisma.project.findFirst({
        where: {
            name: projectName,
        },
    });
};

export { createOneProject, findProjectByName };
