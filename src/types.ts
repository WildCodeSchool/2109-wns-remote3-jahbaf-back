import { Sprint, Project, TaskStatus, Task, Role } from './interfaces';

export type SprintInput = Omit<Sprint, 'id'>;

export type ProjectInput = {
    projectName: string,
    projectDescription?: string,
    published?: boolean,
    roleName: string
};

export type UpdateProjectInput = Pick<Project, 'id'> & Partial<ProjectInput>;

export type TaskStatusInput = Omit<TaskStatus, 'id'>;

export type TaskInput = {
    title: string,
    description: string,
    projectId: string
};

export type UpdateTaskInput = Partial<Task>;

export type RoleInput = Omit<Role, 'id'>;
export type UpdateRoleInput = {
    id: number,
    name: string
};

export type AddUserToProjectInput = {
    userId: string,
    roleId: number,
    projectId: string
};
