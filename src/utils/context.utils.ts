import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { prisma } from '../client';
import { getUserIdFromToken } from './auth.utils';

export interface Context {
  prisma: PrismaClient
  userId?: string
  res: Response
  req: Request
}

export async function createContext(context: Context) {
    let userId;
    try {
        userId = context.req.cookies && await getUserIdFromToken(context.req, context.res, prisma);
    } catch {
        userId = '';
    }
    return {
        ...context,
        prisma,
        userId,
    };
}