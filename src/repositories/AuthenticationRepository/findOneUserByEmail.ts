import { PrismaClient, User } from '.prisma/client';
import { ICreateUserArgs } from 'src/interfaces';

async function oneUserByEmail({ email }: Pick<ICreateUserArgs, 'email'>, prisma: PrismaClient): Promise<User | null> {
    return prisma.user.findUnique({
        where: {
            email,
        },
    });
}

export { oneUserByEmail };