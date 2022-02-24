import { TaskErrorCodes } from './tasks.codes';

export class UnknownTaskException extends Error {
    readonly code = TaskErrorCodes.NOT_EXISTING_TASK;
    readonly message = "La tâche n'existe pas";
}

export class TaskNotUpdatedException extends Error {
    readonly code = TaskErrorCodes.TASK_NOT_UPDATED;
    readonly message = "La tâche n'a pas pu être mise a jour";
}
