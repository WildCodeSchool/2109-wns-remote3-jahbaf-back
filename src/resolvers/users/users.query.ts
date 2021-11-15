import { User } from 'src/interfaces';
import { getUsers } from 'src/services/users/users.service';

export const users = async (): Promise<Array<User>> => {
    return await getUsers();
};
