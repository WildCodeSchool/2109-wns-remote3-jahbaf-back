import { INVALID_DATE_FORMAT } from './shared.codes';

export class InvalidDateFormatException extends Error {
    code = INVALID_DATE_FORMAT;
    message = 'La valeur passée n\'est pas une date';
}
