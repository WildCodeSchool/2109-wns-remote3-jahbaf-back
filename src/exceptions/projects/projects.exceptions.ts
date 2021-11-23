import { MISSING_MANDATORY_FIELD } from 'src/exceptions/projects/projects.codes';

export class MissingMandatoryFieldException extends Error {
    readonly code = MISSING_MANDATORY_FIELD;
    readonly message = 'Une valeur requise est manquante';
}
