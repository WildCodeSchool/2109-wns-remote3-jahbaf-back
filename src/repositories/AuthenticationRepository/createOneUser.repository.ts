import { prisma } from 'src/client';
import { ICreateUserArgs, User } from 'src/interfaces';

export const createOneUser = async ({
    email,
    password,
    name = '',
}: ICreateUserArgs): Promise<User> => {
    return await prisma.app_User.create({
        data: {
            email,
            password,
            name: name,
        },
    });
};
