export interface ICreateUserArgs {
    name: string;
    email: string;
    password: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    activated: boolean;
}
