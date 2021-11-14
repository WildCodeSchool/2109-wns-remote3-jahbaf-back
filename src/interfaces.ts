import { ProjectInput } from './types';

export interface ICreateUserArgs {
  name: string,
  email: string,
  password: string
}

export interface CreateProjectArgs {
  projectInput: ProjectInput;
}

export interface Project {
  id: string;
  name: string;
}
