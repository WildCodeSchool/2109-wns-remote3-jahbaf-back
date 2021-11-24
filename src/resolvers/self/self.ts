import { PrismaClient, User } from '.prisma/client';
import { ApolloError } from 'apollo-server-errors';
import { oneUserById } from 'src/repositories/AuthenticationRepository/oneUserById.repository';


/**
 * In the future we would take the id from the context
 */
async function self(
    parent: any,
    args: Pick<User, 'id'>,
    prisma: PrismaClient,
) {
    const user = await oneUserById({ id: args.id }, prisma);
    if(!user) throw new ApolloError('User not found');
    return user;
}

export { self };
