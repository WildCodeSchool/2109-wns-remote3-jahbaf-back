import { Role } from '@prisma/client';
import {
    RoleNotCreatedException,
    RoleNotFoundException,
    RoleNotUpdatedException,
} from 'src/exceptions';
import {
    createRole,
    findAllRolesFromProject,
    findRoleById,
    updateRole,
} from 'src/repositories';
import { RoleInput, UpdateRoleInput } from 'src/types';

export const findRoleByIdService = async (
    findRoleByIdInput: Pick<Role, 'id'>
): Promise<Role> => {
    const role = await findRoleById(findRoleByIdInput);
    if (!role) {
        throw new RoleNotFoundException();
    }
    return role;
};

export const findAllRoleByProjectService = async (
    projectId: string
): Promise<Role[]> => {
    const roles = await findAllRolesFromProject(projectId);
    if (!roles) {
        throw new RoleNotFoundException();
    }
    return roles;
};

export const createRoleService = async (
    roleInput: RoleInput
): Promise<Role> => {
    const role = await createRole(roleInput);
    if (!role) throw new RoleNotCreatedException();
    return role;
};

export const updateRoleService = async (
    roleInput: UpdateRoleInput
): Promise<Role> => {
    const { id } = roleInput;
    if (await findRoleById({ id })) {
        throw new RoleNotFoundException();
    }
    const role = await updateRole(roleInput);
    if (!role) throw new RoleNotUpdatedException();
    return role;
};
