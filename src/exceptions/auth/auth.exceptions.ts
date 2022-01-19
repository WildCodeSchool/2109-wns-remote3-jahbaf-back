import { INVALID_EMAIL } from './auth.codes';

export class InvalidEmailException extends Error {
    code = INVALID_EMAIL;
    message = 'L\'adresse email que vous avez renseigné n\'est pas valide';
}

export class UserNotFound extends Error {
    code = INVALID_EMAIL;
    message = 'Cet utilisateur n\'existe pas';
}