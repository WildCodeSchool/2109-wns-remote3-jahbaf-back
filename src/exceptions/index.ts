export * from './auth/auth.exceptions';
export * from './projects/projects.exceptions';
export * from './taskStatus/taskStatus.exceptions';

export * from './shared/shared.exceptions';

export class InternalErrorException extends Error {
    code = 1000;
    message = 'Une erreur interne est survenue';
}
