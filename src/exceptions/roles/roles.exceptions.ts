import { RolesErrorCodes } from './roles.codes';
export class RoleNotFoundException extends Error {
    readonly code = RolesErrorCodes.ROLE_NOT_FOUND;
    readonly message = 'Ce rôle n\'existe pas';
}

export class RoleNotCreatedException extends Error {
    readonly code = RolesErrorCodes.ROLE_COULD_NOT_BE_CREATED;
    readonly message = 'Le role n\'a pas pu être créé';
}

export class RoleNotUpdatedException extends Error {
    readonly code = RolesErrorCodes.ROLE_COULD_NOT_BE_UPDATED;
    readonly message = 'Le role n\'a pas pu être mis à jour';
}
