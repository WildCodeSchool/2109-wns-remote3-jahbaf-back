import { CommentErrorCodes } from './comments.code';

export class CommentNotFoundException extends Error {
    code = CommentErrorCodes.COMMENT_NOT_FOUND;
    message = 'Ce commentaire n\'existe pas';
}