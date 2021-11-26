import { Task, Project } from '.prisma/client';

export type TaskInput = Omit<Task, 'id'>;
export type ProjectInput = Omit<Project, 'id'>;
