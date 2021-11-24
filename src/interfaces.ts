import { ProjectInput } from './types';
import { TaskStatusInput } from './types';

export interface ICreateUserArgs {
    name: string;
    email: string;
    password: string;
}

export interface CreateProjectArgs {
    projectInput: ProjectInput;
}

export interface Project {
    id: string;
    name: string;
    description: string;
    published: boolean;
}

export interface ProjectCreatePayLoad {
    project: Project;
}

export interface TaskStatus {
    id: string;
    name: string;
}

export interface CreateTaskStatusArgs {
    taskStatusInput: TaskStatusInput;
}