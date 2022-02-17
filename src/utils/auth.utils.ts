import jwt, { SignOptions } from 'jsonwebtoken';
import express, { CookieOptions } from 'express';
import {
    AuthenticationError,
    UserInputError,
} from 'apollo-server-core';
import bcrypt from 'bcryptjs';
import { PrismaClient, User } from '.prisma/client';
import { oneUserByEmail, oneUserById } from 'src/repositories';
import { Context } from './context.utils';

export function formatEmail(email: string) {
    return email.toLowerCase().trim();
}

const ONE_WEEK_IN_SECONDS = 7 * 24 * 60 * 60;
const APP_TOKENIZATION_SECRET: string = process.env.TOKEN_PRIVATE_KEY || 'secret';

export const COOKIE_SETTINGS: CookieOptions = {
    // cookie is valid for all subpaths of my domain
    path: '/',
    // this cookie won't be readable by the browser
    httpOnly: true,
    // and won't be usable outside of my domain
    sameSite: 'none',
    // HTTPS?
    secure: true,
};

// Cache issues led to create this function to make sure the emittedAt key is always regenerated
function generateTokenSettings() {
    return {
        expiresIn: ONE_WEEK_IN_SECONDS,
        emittedAt: Date.now(),
    };
}

export function createToken(
    user: Omit<User, 'password'>,
    tokenOptions: SignOptions = {},
): string {
    const tokenSettings = { ...generateTokenSettings(), ...tokenOptions };
    return jwt.sign(
        {
            userId: user.id,
            ...tokenSettings,
        },
        APP_TOKENIZATION_SECRET,
    );
}

export interface Token {
  expiresIn: number
  emittedAt: number
  userId: string
}

function isTokenExpired(expiresIn: number, emittedAt: number) {
    return Date.now() > ((expiresIn * 1000) + emittedAt);
}

function getTokenPayload(token: string): Token {
    return jwt.verify(token, APP_TOKENIZATION_SECRET) as Token;
}

export async function getUserIdFromToken(req: express.Request, res: express.Response, prisma: PrismaClient) {
    const token = req.cookies.session_id;
    if (token) {
        const { userId, expiresIn, emittedAt } = getTokenPayload(token);
        if (isTokenExpired(expiresIn, emittedAt)) {
            res.clearCookie('session');
            console.warn('Session expired');
            throw new AuthenticationError('Session expired');
        }
        const user = await oneUserById({ id: userId }, prisma);
        if (!user) {
            res.clearCookie('session');
            console.warn('Session expired');
            throw new AuthenticationError('Session expired');
        }
        return userId;
    }
    return '';
}

export interface LoginVariables {
  email: string,
  password: string
}

export async function authenticateUser({ email, password }: LoginVariables, context: Context) {
    const user = await oneUserByEmail({ email: formatEmail(email) }, context.prisma);
    const valid = await bcrypt.compare(password, user?.password || '');
    if (!user || !valid) {
        console.warn('Incorrect email or password');
        throw new UserInputError('Incorrect email or password');
    }
    return user;
}
