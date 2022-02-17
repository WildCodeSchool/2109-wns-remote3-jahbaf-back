import { PrismaClient } from '@prisma/client';

export function deleteOneUserById({ id }: { id: string }, prisma: PrismaClient) {
    return prisma.user.delete({
        where: {
            id
        }
    });
}