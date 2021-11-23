import { ICreateUserArgs } from 'src/interfaces';
import { createOneUser } from 'src/repositories';
import { formatEmail, getTokenPayload, hashPassword, isTokenExpired } from './helpers';
import jwt, { SignOptions } from 'jsonwebtoken';
import { PrismaClient, User } from '.prisma/client';
import express, { CookieOptions } from 'express';
import { oneUserByEmail } from 'src/repositories/AuthenticationRepository/findOneUserByEmail';
import { AuthenticationError, UserInputError } from 'apollo-server-errors';
import bcrypt from 'bcryptjs';
import { Context } from './context.service';
import { findOneUserById } from 'src/repositories/AuthenticationRepository/fineOneUserById';
import { deleteOneUserById } from 'src/repositories/AuthenticationRepository/deleteOneUserById';

const ONE_WEEK_IN_SECONDS = 7 * 24 * 60 * 60;
export const APP_TOKENIZATION_SECRET: string = process.env.TOKEN_PRIVATE_KEY || 'secret';

export const signUpService = async ({ email, password, name }: ICreateUserArgs) => {
    const hashedPassword = await hashPassword(password);

    const formatedEmail = formatEmail(email);
    const user = await createOneUser({ email: formatedEmail, password: hashedPassword, name });
    return user;
};

export async function deleteUserService(email: string, password: string, context: Context) {
    try {
        const { id } = await authenticateUser({
            email: formatEmail(email),
            password,
        }, context);
        await deleteOneUserById({ id }, context.prisma);
    } catch(e){
        console.log(e);
    }
}

export async function authenticateUser(
    { email, password }: Pick<ICreateUserArgs,
    'email' | 'password'>, 
    context: Context) {
    try {
        const user = await oneUserByEmail({ email: formatEmail(email) }, context.prisma);
        const valid = await bcrypt.compare(password, user?.password || '');
        if (!user || !valid) {
            console.warn('Incorrect email or password');
            throw new UserInputError('Incorrect email or password');
        }
        return user;
    } catch(e) {
        console.log(e);
    }
}
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

export async function getUserId(req: express.Request, res: express.Response, prisma: PrismaClient) {
    try {
        const token = req.cookies.session;
        if (token) {
            const { userId, expiresIn, emittedAt } = getTokenPayload(token);
            if (isTokenExpired(expiresIn, emittedAt)) {
                res.clearCookie('session');
                console.warn('Session expired');
                throw new AuthenticationError('Session expired');
            }
            const user = await findOneUserById({ id: userId }, prisma);
            if (!user) {
                res.clearCookie('session');
                console.warn('Session expired');
                throw new AuthenticationError('Session expired');
            }
            return userId;
        }
        return '';
    } catch(e) {
        console.log(e);
    }
}

export function createToken(
    user: User,
    tokenOptions: SignOptions = {},
): string {
    const tokenSettings = {
        expiresIn: ONE_WEEK_IN_SECONDS,
        emittedAt: Date.now(), ...tokenOptions
    };
    return jwt.sign(
        {
            userId: user.id,
            ...tokenSettings,
        },
        APP_TOKENIZATION_SECRET,
    );
}

export async function loginUserService(email: string, password: string, context: Context) {
    const user = await authenticateUser({
        email: formatEmail(email),
        password,
    }, context);
    if(!user) throw new AuthenticationError('User not found');
    const token = createToken(user);
    context.res.cookie('session_id', token, COOKIE_SETTINGS);

    return user;
}
