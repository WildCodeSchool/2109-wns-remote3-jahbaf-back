import { App_User } from '@prisma/client';
import {
    TaskInput,
    ProjectInput,
    TaskStatusInput,
    SprintInput,
    UpdateProjectInput,
} from './types';

export interface ICreateUserArgs {
    name?: string;
    email: string;
    password: string;
}

export interface LoginArgs {
    email: string;
    password: string;
}

// An interface declaring no members is equivalent to its supertype.
export type DeleteUserArgs = LoginArgs;

export interface UpdateUserByIdArgs {
    id: string;
    data: {
        password?: string;
        lastPasswordReset?: Date;
        last_activity?: Date;
        is_active: boolean;
        name?: string;
    };
}

export interface Sprint {
    id: string;
    startDate: Date;
    endDate: Date;
    description: string | null;
    projectId: string;
}

export interface CreateSprintArgs {
    sprintInput: SprintInput;
}

export interface CreateProjectArgs {
    projectInput: ProjectInput;
}

export interface Project {
    id: string;
    name: string;
    description: string | null;
    published: boolean;
}

export interface UpdateProjectArgs {
    projectInput: UpdateProjectInput;
}

export interface ProjectCreatePayLoad {
    project: Project;
}

export interface TaskStatus {
    id: string;
    name: string;
    projectId: string;
}

export interface CreateTaskStatusArgs {
    taskStatusInput: TaskStatusInput;
}
export interface Task {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    statusId: string | null;
    sprintId: string | null;
    projectId: string;
    userId: string | null;
    title: string;
    points: number | null;
    priority: string | null;
    description: string | null;
}

export interface CreateTaskArgs {
    taskInput: TaskInput;
}

export interface AssignTaskStatusArgs {
    taskId: string;
    taskStatusId: string;
}

export interface AssignUserArgs {
    taskId: string;
    userId: string;
}

export type User = App_User;
