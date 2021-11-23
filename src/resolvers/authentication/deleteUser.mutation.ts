
import { Context } from '../../services/auth/context.service';
import { deleteUserService } from '../../services/auth/authentication.service';
export interface deleteUserArgs {
  email: string,
  password: string,
}
async function deleteUser(parent: any, { email, password }: deleteUserArgs, context: Context) {
    try {
        console.info('Trying to delete a user', { email });
        deleteUserService(email, password, context);
        console.info('User deletion successful', { email });
        return {
            message: `${email} has been succesfully deleted`,
        };
    } catch (e) {
        console.log(e);
    }
}

export { deleteUser };
