import { SharedErrorCodes } from './shared.codes';

export class MissingMandatoryFieldException extends Error {
    readonly code = SharedErrorCodes.MISSING_MANDATORY_FIELD;
    readonly message = 'Une valeur requise est manquante';
}

export class InvalidDateFormatException extends Error {
    readonly code = SharedErrorCodes.INVALID_DATE_FORMAT;
    readonly message = 'La valeur passée n\'est pas une date';
}


