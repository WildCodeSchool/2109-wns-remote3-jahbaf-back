import { UserNotFoundException } from 'src/exceptions';
import { Comment, UpdateCommentArgs } from 'src/interfaces';
import { accessLogger, errorLogger } from 'src/logger';
import { updateCommentService } from 'src/services/comment/comment.service';
import { Context } from 'src/utils/context.utils';

export const updateCommentMutation = async (
    _: any,
    { commentInput }: UpdateCommentArgs,
    context: Context
): Promise<Comment> => {
    try {
        const { userId } = context;
        if(!userId) throw new UserNotFoundException();
        accessLogger.info('createComment');
        return await updateCommentService(commentInput.commentId, userId, commentInput.message);
    } catch(e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
};
