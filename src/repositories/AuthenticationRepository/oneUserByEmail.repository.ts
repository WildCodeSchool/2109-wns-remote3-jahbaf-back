import { PrismaClient, User } from '.prisma/client';


export async function oneUserByEmail({ email }: Pick<User, 'email'>, prisma: PrismaClient) {
    return prisma.user.findUnique({
        where: {
            email,
        },
        include: {
            tasks: true,
            project_users: true,
        }
    });
}
