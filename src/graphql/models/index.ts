import { AuthTypes } from './auth/Types';
import { RandomTypes } from './hello/Types';
import { TaskTypes } from './task/Types';
import { ProjectTypes } from './project/Types';
import { Query } from './Query';
import { Mutation } from './Mutations';

export const Types = [
    ...AuthTypes,
    ...TaskTypes,
    ...ProjectTypes,
    ...RandomTypes
];


export const typeDefs = [
    Mutation,
    Query,
    ...Types,
];
