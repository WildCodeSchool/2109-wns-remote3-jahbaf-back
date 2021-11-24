import { Task } from '.prisma/client';

export type TaskInput = Omit<Task, 'id'>;