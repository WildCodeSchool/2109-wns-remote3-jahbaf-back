import { TaskStatusErrorCodes } from './taskStatus.codes';

export class TaskAlreadyExistsException extends Error {
    readonly code = TaskStatusErrorCodes.ALREADY_EXISTS;
    readonly message = 'Cette tâche est déjà existante.';
}

export class UnknownTaskStatusException extends Error {
    readonly code = TaskStatusErrorCodes.NOT_EXISTING_TASK_STATUS;
    readonly message = "Le status de tâche n'existe pas";
}
