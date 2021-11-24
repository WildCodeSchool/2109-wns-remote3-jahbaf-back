import { TaskInput } from './types';

export interface ICreateUserArgs {
  name: string,
  email: string,
  password: string
}

export interface CreateTaskArgs {
  taskInput: TaskInput
}