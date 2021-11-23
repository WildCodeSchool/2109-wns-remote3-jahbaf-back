export interface ICreateUserArgs {
    name: string;
    email: string;
    password: string;
}

export interface Sprint {
    id: string;
    startDate: Date;
    endDate: Date;
    projectId: string;
}
