import { TaskStatusErrorCodes } from './taskStatus.codes';

export class AlreadyExistsException extends Error {
    readonly code = TaskStatusErrorCodes.ALREADY_EXISTS;
    readonly message = 'Cette tâche est déjà existante.';
}
