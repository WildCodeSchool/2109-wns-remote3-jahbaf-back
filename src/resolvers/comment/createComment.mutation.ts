import { UserNotFoundException } from 'src/exceptions';
import { Comment, CreateCommentArgs } from 'src/interfaces';
import { accessLogger, errorLogger } from 'src/logger';
import { createCommentService } from 'src/services/comment/comment.service';
import { Context } from 'src/utils/context.utils';

export const createCommentMutation = async (
    _: any,
    { commentInput }: CreateCommentArgs,
    context: Context
): Promise<Comment> => {
    try {
        const { userId } = context;
        if(!userId) throw new UserNotFoundException();
        accessLogger.info('createComment');
        return await createCommentService(commentInput.taskId, userId, commentInput.message);
    } catch(e: any) {
        errorLogger.error(e.message, { code: e.code });
        throw e;
    }
};
