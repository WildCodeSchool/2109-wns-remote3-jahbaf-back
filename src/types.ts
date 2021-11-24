import { Task } from './interfaces';

export type TaskInput = Omit<Task, 'id'>;