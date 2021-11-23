import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { APP_TOKENIZATION_SECRET } from '..';


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

export interface Token {
    expiresIn: number
    emittedAt: number
    userId: string
  }

/**
 * Generate a token for the user
 * @param expiresIn time in seconds where token will expire
 * @param emittedAt time in seconds of token's emission
 * @returns boolean
 */
export function isTokenExpired(expiresIn: number, emittedAt: number) {
    return Date.now() > ((expiresIn * 1000) + emittedAt);
}
  
/**
 * Extract content from the token provided
 * @param token 
 * @returns token payload
 */
export function getTokenPayload(token: string): Token {
    return jwt.verify(token, APP_TOKENIZATION_SECRET) as Token;
}