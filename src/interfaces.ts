import { SprintInput, ProjectInput } from './types';

export interface ICreateUserArgs {
    name: string;
    email: string;
    password: string;
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
    description: string;
    published?: boolean;
}
