import { User } from '.prisma/client';
import { prisma } from 'src/client';

export async function oneUserById({ id }: Pick<User, 'id'>) {
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
