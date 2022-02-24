import { prisma } from 'src/client';

export function deleteOneUserById({ id }: { id: string }) {
    return prisma.app_User.delete({
        where: {
            id,
        },
    });
}
