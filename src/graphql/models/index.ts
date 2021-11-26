import { AuthTypes } from './auth/Types';
import { TaskTypes } from './task/Types';
import { ProjectTypes } from './project/Types';
import { Query } from './Query';
import { TaskStatusTypes } from './taskStatus/Types';
import { Mutation } from './Mutations';

export const Types = [...AuthTypes, ...ProjectTypes, ...TaskStatusTypes, ...TaskTypes];

export const typeDefs = [Mutation, Query, ...Types];
