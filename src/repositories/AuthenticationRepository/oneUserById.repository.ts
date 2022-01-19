import { PrismaClient, User } from '.prisma/client';


export async function oneUserById({ id }: Pick<User, 'id'>, prisma: PrismaClient) {
    return prisma.user.findUnique({
        where: {
            id,
        },
        include: {
            tasks: true,
            project_users: true,
        }
    });
}
