import { Sprint, Project, TaskStatus, Task, Role, Project_User } from './interfaces';

export type SprintInput = Omit<Sprint, 'id'>;

export type ProjectInput = Omit<Project, 'id'> & { roleId: number };
export type UpdateProjectInput = Pick<Project, 'id'> & Partial<ProjectInput>;

export type TaskStatusInput = Omit<TaskStatus, 'id'>;

export type TaskInput = Omit<Task, 'id'>;
export type UpdateTaskInput = Partial<Task>;

export type RoleInput = Omit<Role, 'id'>;
export type UpdateRoleInput = Pick<Role, 'id'> & Partial<RoleInput>;

export type AddUserToProjectInput = Omit<Project_User, 'id' & 'userId'>;
