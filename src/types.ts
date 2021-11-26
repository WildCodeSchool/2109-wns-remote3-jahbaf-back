import { Project, TaskStatus, Task } from './interfaces';

export type ProjectInput = Omit<Project, 'id'>;

export type TaskStatusInput = Omit<TaskStatus, 'id'>;

export type TaskInput = Omit<Task, 'id'>;
