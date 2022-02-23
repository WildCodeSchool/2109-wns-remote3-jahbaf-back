import { prisma } from 'src/client';

export function deleteOneUserById({ id }: { id: string }) {
    return prisma.user.delete({
        where: {
            id
        }
    });
}