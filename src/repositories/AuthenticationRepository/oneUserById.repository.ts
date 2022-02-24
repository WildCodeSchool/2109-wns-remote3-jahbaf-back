import { User } from 'src/interfaces';
import { prisma } from 'src/client';

export async function oneUserById({
    id,
}: Pick<User, 'id'>): Promise<User | null> {
    return prisma.app_User.findUnique({
        where: {
            id,
        },
        include: {
            tasks: true,
            project_users: true,
        },
    });
}
