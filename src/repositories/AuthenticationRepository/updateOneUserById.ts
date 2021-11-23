import { PrismaClient } from '.prisma/client';

export interface UpdateUserByIdArgs {
  id: string,
  data: any
}

export async function updateOneUserById({ id, data }: UpdateUserByIdArgs, prisma: PrismaClient) {
    return prisma.user.update({
        where: {
            id,
        },
        data,
    });
}