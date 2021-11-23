import { prisma } from 'src/client';
import { ICreateUserArgs } from 'src/interfaces';

async function oneUserByEmail({ email }: Pick<ICreateUserArgs, 'email'>) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export { oneUserByEmail };