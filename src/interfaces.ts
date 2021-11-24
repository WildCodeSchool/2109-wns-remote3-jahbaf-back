import { TaskInput } from './types';

export interface ICreateUserArgs {
  name: string,
  email: string,
  password: string
}


interface TaskStatus {
  id: string;
  content: string
}
interface TaskProject{
  id: string;
  name: string;
}
interface TaskSprint {
  id: string;
  number: number;
}
interface TaskUser {
  id: string;
  name: string;
}
export interface Task {
  id: string;
  status: TaskStatus;
  project: TaskProject;
  sprint: TaskSprint;
  assignedUser: TaskUser;
  title: string;
  points: number;
  priority: string;
  description: string;
}

export interface CreateTaskArgs {
  taskInput: TaskInput
}