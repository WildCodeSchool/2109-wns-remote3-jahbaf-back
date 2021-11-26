import { TaskErrorCodes } from './tasks.codes';

export class UnknownTaskException extends Error {
    readonly code = TaskErrorCodes.NOT_EXISTING_TASK;
    readonly message = "La tâche n'existe pas";
}
