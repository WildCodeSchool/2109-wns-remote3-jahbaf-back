import bcrypt from 'bcryptjs';

/**
 * Hash the password provided by the user with the help of bcryptjs
 * @param password Password provided by the user
 * @returns The hashed password in a promise
 */
export const hashPassword = (password: string): Promise<string> => {
    return bcrypt.hash(password, 10);
};

/**
 * Sanitize the email provided by the user
 * @param email Email provided by the user
 * @returns string
 */
export const formatEmail = (email: string): string => {
    return email.trim().toLocaleLowerCase();
};

/**
 * Check if the email provided by the user is matching with an email regex pattern
 * @param email Email provided by the user
 * @returns boolean
 */
export const isEmailValid = (email: string): boolean => {
    const emailExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailExpression.test(formatEmail(email));
};
