import { INVALID_EMAIL, USER_COULD_NOT_BE_AUTHENTICATED, USER_COULD_NOT_BE_CREATED, USER_NOT_FOUND } from './auth.codes';

export class InvalidEmailException extends Error {
    code = INVALID_EMAIL;
    message = 'L\'adresse email que vous avez renseigné n\'est pas valide';
}

export class UserNotFound extends Error {
    code = USER_NOT_FOUND;
    message = 'Cet utilisateur n\'existe pas';
}

export class UserCouldNotBeCreated extends Error {
    code = USER_COULD_NOT_BE_CREATED;
    message = 'Cet utilisateur n\'a pas pu être créé';
}

export class UserCouldNotBeAuthenticated extends Error {
    code = USER_COULD_NOT_BE_AUTHENTICATED;
    message = 'Cet utilisateur n\'a pas pu être authentifié';
}