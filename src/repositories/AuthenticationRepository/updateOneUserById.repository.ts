import { prisma } from 'src/client';

export interface UpdateUserByIdArgs {
  id: string,
  data: {
    password?: string,
    lastPasswordReset?: Date,
    last_activity?: Date,
    is_active: boolean,
    name?: string
  }
}

export async function updateOneUserById({ id, data }: UpdateUserByIdArgs) {
    return prisma.user.update({
        where: {
            id,
        },
        data,
    });
}