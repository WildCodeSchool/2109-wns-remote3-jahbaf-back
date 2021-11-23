import { ICreateUserArgs } from 'src/interfaces';
import { createOneUser } from 'src/repositories/AuthenticationRepository/createOneUser';
import { formatEmail, hashPassword } from 'src/services/AuthenticationService/utils';

async function signup(parent: any, { email, password, name }: ICreateUserArgs) {
  try {
    console.log('Signup resolver');
    const hashedPassword = await hashPassword(password);
    const formatedEmail = formatEmail(email);
    const user = await createOneUser({ email: formatedEmail, password: hashedPassword, name });
    console.log('USER', user);
    console.log('User added to database !');
    return {
      user
    };
  } catch (e) {
    console.log();
    (e);
    throw e;
  }
}

export { signup };
