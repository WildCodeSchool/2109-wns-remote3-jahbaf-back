import { CommentNotFoundException, MissingMandatoryFieldException } from 'src/exceptions';
import { Comment } from 'src/interfaces';
import { addComment, getCommentById, updateComment } from 'src/repositories';

export const createCommentService = async (
    taskId: string,
    userId: string,
    message: string
): Promise<Comment> => {
    if (!taskId || !userId || !message) {
        throw new MissingMandatoryFieldException();
    }
    return await addComment(taskId, userId, message);
};

export const updateCommentService = async (
    commentId: string,
    userId: string,
    message: string
): Promise<Comment> => {
    if (!commentId || !userId || !message) {
        throw new MissingMandatoryFieldException();
    }
    if(!await getCommentById(commentId)) throw new CommentNotFoundException();
    return await updateComment(commentId, message);
};
