import { ProjectErrorCodes } from './projects.codes';

export class MissingMandatoryFieldException extends Error {
    readonly code = ProjectErrorCodes.MISSING_MANDATORY_FIELD;
    readonly message = 'Une valeur requise est manquante';
}
