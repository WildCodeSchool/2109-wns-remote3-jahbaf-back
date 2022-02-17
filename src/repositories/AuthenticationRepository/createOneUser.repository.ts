import { prisma } from 'src/client';
import { ICreateUserArgs } from 'src/interfaces';

export const createOneUser = async ({ email, password, name = '' }: ICreateUserArgs) => {
    return await prisma.user.create({
        data: {
            email,
            password,
            name: name,
        },
        select: {
            id: true,
            email: true,
        },
    });
};
