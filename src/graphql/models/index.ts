import { AuthTypes } from './auth/Types';
import { RandomTypes } from './hello/Types';
import { Mutation } from './Mutations';
import { ProjectTypes } from './project/Types';
import { Query } from './Query';
import { TaskStatusTypes } from './taskStatus/Types';

export const Types = [...AuthTypes, ...ProjectTypes, ...RandomTypes, ...TaskStatusTypes];

export const typeDefs = [
    Mutation,
    Query,
    ...Types,
];
