import { prisma } from 'src/client';
import { Comment } from 'src/interfaces';

export const addComment = async (
    taskId: string,
    authorId: string,
    message: string
): Promise<Comment> => {
    return await prisma.comment.create({
        data: {
            taskId,
            message,
            authorId
        }
    });
};

export const getCommentById = async (
    commentId: string
): Promise<Comment | null> => {
    return await prisma.comment.findUnique({ where: { id: commentId }});
};

export const updateComment = async (
    commentId: string,
    message: string
): Promise<Comment> => {
    return await prisma.comment.update({
        where: {
            id: commentId
        },
        data: {
            message,
            updatedAt: Date.now()
        }
    });
};
