import { prisma } from 'src/client';
import { UpdateUserByIdArgs, User } from 'src/interfaces';

export async function updateOneUserById({
    id,
    data,
}: UpdateUserByIdArgs): Promise<User> {
    return prisma.app_User.update({
        where: {
            id,
        },
        data,
    });
}
