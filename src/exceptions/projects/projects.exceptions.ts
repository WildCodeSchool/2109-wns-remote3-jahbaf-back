import { ProjectErrorCodes } from './projects.codes';

export class MissingMandatoryFieldException extends Error {
    readonly code = ProjectErrorCodes.MISSING_MANDATORY_FIELD;
    readonly message = 'Une valeur requise est manquante';
}

export class ProjectNotFoundException extends Error {
    readonly code = ProjectErrorCodes.PROJECT_NOT_FOUND;
    readonly message = 'Ce projet n\'existe pas';
}
