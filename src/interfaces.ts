import { SprintInput } from './types';

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
