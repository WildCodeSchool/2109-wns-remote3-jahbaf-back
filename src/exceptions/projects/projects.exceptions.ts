import {
    DUPLICATE_PROJECT_NAME,
    MISSING_MANDATORY_FIELD,
} from 'src/exceptions/projects/projects.codes';

export class MissingMandatoryFieldException extends Error {
    readonly code = MISSING_MANDATORY_FIELD;
    readonly message = 'Une valeur requise est manquante';
}

export class DuplicateProjectException extends Error {
    readonly code = DUPLICATE_PROJECT_NAME;
    readonly message = 'Le nom de projet est déjà utilisé';
}
