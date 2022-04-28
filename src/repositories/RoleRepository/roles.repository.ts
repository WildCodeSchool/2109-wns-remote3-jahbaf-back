import { prisma } from 'src/client';
import { Role } from '@prisma/client';
import { RoleInput, UpdateRoleInput } from 'src/types';

export const findRoleById = async (id: number): Promise<Role | null> => {
    return await prisma.role.findUnique({
        where: {
            id
        }
    });
};

export const findAllRolesFromProject = async (projectId: string): Promise<Role[] | null> => {
    return await prisma.role.findMany({
        where: {
            projectId
        }
    });
};

export const createRole = async (
    roleInput: RoleInput
): Promise<Role> => {
    const { name, projectId } = roleInput;
    return await prisma.role.create({
        data: {
            name,
            projectId
        },
    });
};

export const updateRole = async (
    roleInput: UpdateRoleInput
): Promise<Role> => {
    const { name, id } = roleInput;
    return await prisma.role.update({
        where: {
            id
        },
        data: {
            name
        },
    });
};