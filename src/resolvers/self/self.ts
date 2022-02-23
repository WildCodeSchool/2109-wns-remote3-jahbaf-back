import { MissingToken, UserNotFoundException } from 'src/exceptions';
import { oneUserById } from 'src/repositories/AuthenticationRepository/oneUserById.repository';
import { Context } from 'src/utils/context.utils';
import { getTokenPayload } from '../../utils/auth.utils';


/**
 * In the future we would take the id from the context
 */
async function self(
    parent: any,
    args: any,
    context: Context,
) {
    const token = context.req.headers.authorization;
    if (!token) throw new MissingToken();
    const { userId } = getTokenPayload(token);
    if (!userId) throw new UserNotFoundException();
    const user = await oneUserById({ id: userId });
    return {
        user
    };
}

export { self };
