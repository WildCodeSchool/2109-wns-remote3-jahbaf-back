import { TaskStatusErrorCodes } from './taskStatus.codes';

export class TaskAlreadyExistsException extends Error {
    readonly code = TaskStatusErrorCodes.ALREADY_EXISTS;
    readonly message = 'Cette tâche est déjà existante.';
}
