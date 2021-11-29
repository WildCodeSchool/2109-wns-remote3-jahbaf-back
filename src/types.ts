import { Sprint, Project, TaskStatus, Task } from './interfaces';

export type SprintInput = Omit<Sprint, 'id'>;

export type ProjectInput = Omit<Project, 'id'>;
export type UpdateProjectInput = Pick<Project, 'id'> & Partial<ProjectInput>;

export type TaskStatusInput = Omit<TaskStatus, 'id'>;

export type TaskInput = Omit<Task, 'id'>;
