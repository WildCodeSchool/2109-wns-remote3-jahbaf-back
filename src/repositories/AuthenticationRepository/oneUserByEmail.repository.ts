import { User } from 'src/interfaces';
import { prisma } from '../../client';

export async function oneUserByEmail({ email }: Pick<User, 'email'>) {
    return prisma.app_User.findUnique({
        where: {
            email,
        },
        include: {
            tasks: true,
            project_users: true,
        },
    });
}
