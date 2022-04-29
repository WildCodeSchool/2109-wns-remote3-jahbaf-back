export * from './auth/auth.exceptions';
export * from './projects/projects.exceptions';
export * from './task/tasks.exceptions';
export * from './taskStatus/taskStatus.exceptions';
export * from './shared/shared.exceptions';
export * from './roles/roles.exceptions';
export * from './comments/comments.exceptions';

export class InternalErrorException extends Error {
    code = 1000;
    message = 'Une erreur interne est survenue';
}
