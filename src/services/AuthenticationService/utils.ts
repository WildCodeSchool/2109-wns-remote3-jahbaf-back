import bcrypt from 'bcryptjs';

function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

function formatEmail(email: string): string {
  return email.trim().toLocaleLowerCase();
}

export { hashPassword, formatEmail };