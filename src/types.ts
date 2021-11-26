import { Project, TaskStatus } from './interfaces';
import { Task, Project } from '.prisma/client';

export type ProjectInput = Omit<Project, 'id'>;

export type TaskStatusInput = Omit<TaskStatus, 'id'>;

export type TaskInput = Omit<Task, 'id'>;
