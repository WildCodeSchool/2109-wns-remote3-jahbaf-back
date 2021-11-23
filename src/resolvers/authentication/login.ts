import { AuthenticationError } from 'apollo-server-errors';
import { ICreateUserArgs } from 'src/interfaces';
import { oneUserByEmail } from 'src/repositories/AuthenticationRepository/findOneUserByEmail';

async function login(parent: any, { email }: Pick<ICreateUserArgs, 'email'>) {
  try {
    console.log('Find one user resolver');
    const user = await oneUserByEmail({email});
    if(!user) throw new AuthenticationError('User not found');
    console.log(user);
    console.log('User found !');
    return {
      user
    };
  } catch (e) {
    console.log();
    (e);
    throw e;
  }
}

export { login };
