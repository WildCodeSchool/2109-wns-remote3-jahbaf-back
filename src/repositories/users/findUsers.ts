import { prisma } from 'src/client';
import { User } from 'src/interfaces';

export const findUsers = async (): Promise<Array<User>> => {
    return await prisma.user.findMany();
};
