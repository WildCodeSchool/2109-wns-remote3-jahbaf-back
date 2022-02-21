import { User } from '.prisma/client';
import { prisma } from '../../client';


export async function oneUserByEmail({ email }: Pick<User, 'email'>) {
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
