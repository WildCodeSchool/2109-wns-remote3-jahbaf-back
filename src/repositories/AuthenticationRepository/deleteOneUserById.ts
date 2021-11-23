import { PrismaClient, User } from '.prisma/client';

export async function deleteOneUserById({ id }: Pick<User, 'id'>, prisma: PrismaClient): Promise<User> {
    return await prisma.user.delete({
        where: {
            id,
        },
    });
}
