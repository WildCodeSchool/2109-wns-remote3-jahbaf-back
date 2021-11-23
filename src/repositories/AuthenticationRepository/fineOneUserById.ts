import { PrismaClient, User } from '.prisma/client';

async function findOneUserById({ id }: Pick<User, 'id'>, prisma: PrismaClient): Promise<User | null> {
    return prisma.user.findUnique({
        where: {
            id,
        },
    });
}

export { findOneUserById };