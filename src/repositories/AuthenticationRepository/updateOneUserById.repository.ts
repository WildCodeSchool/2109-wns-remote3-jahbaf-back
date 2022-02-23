import { prisma } from 'src/client';
import { UpdateUserByIdArgs } from 'src/interfaces';

export async function updateOneUserById({ id, data }: UpdateUserByIdArgs) {
    return prisma.user.update({
        where: {
            id,
        },
        data,
    });
}