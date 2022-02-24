import { prisma } from 'src/client';
import { Project, Project_User } from '.prisma/client';
import { ProjectInput, UpdateProjectInput, AddUserToProjectInput } from 'src/types';

export const createOneProject = async (
    projectInput: ProjectInput & { userId: string }
): Promise<Project> => {
    const { name, description, published, userId, roleId } = projectInput;
    const project = await prisma.project.create({
        data: {
            name,
            description: description || '',
            published,
        },
    });
    await prisma.project_User.create({
        data: {
            projectId: project.id,
            roleId,
            userId
        }
    });
    return project;
};

export const addUserToProject = async (
    addUserToProjectInput: AddUserToProjectInput & { userId: string }
): Promise<Project_User> => {
    const { roleId, userId, projectId } = addUserToProjectInput;
    return await prisma.project_User.create({
        data: {
            projectId,
            userId,
            roleId
        }
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
            updatedAt: new Date(),
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
        include: {
            projectUsers: {
                include: {
                    user: {
                        select: {
                            email: true,
                            id: true,
                        }
                    }
                }
            }
        },
    });
};
