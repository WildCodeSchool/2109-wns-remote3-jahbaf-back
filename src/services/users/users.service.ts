import { User } from 'src/interfaces';
import { findUsers } from 'src/repositories/users';

export const getUsers = async (): Promise<Array<User>> => {
    return await findUsers();
};
