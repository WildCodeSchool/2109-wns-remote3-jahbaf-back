import { Project, TaskStatus } from './interfaces';

export type ProjectInput = Omit<Project, 'id'>;

export type TaskStatusInput = Omit<TaskStatus, 'id'>;