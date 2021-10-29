import { prisma } from 'src/client';
import { ICreateUserArgs } from 'src/interfaces';

async function createOneUser({email, password, name}: ICreateUserArgs) {
  console.log('TRYING TO CREATE A USER');
  return await prisma.user.create({
    data: {
      email,
      password,
      name
    },
    select: {
      id: true,
      email: true,
    },
  });
}

export { createOneUser };