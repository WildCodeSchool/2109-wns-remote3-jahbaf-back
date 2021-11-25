import { SharedErrorCodes } from './shared.codes';

export class MissingMandatoryFieldException extends Error {
    readonly code = SharedErrorCodes.MISSING_MANDATORY_FIELD;
    readonly message = 'Une valeur requise est manquante';
}
