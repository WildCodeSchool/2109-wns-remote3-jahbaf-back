import { User } from '.prisma/client';
import { UserNotFoundException } from 'src/exceptions';
import { oneUserById } from 'src/repositories/AuthenticationRepository/oneUserById.repository';
import { Context } from 'src/utils/context.utils';


/**
 * In the future we would take the id from the context
 */
async function self(
    parent: any,
    args: any,
    context: Context,
) {
    const { userId } = context;
    if(!userId) throw new UserNotFoundException();
    const user = await oneUserById({ id: userId }, context.prisma);
    return user;
}

export { self };
