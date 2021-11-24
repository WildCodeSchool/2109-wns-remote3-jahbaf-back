import { AuthTypes } from './auth/Types';
import { RandomTypes } from './hello/Types';
import { Mutation } from './Mutations';
import { TaskTypes } from './task/Types';
import { Query } from './Query';

export const Types = [...AuthTypes, ...TaskTypes, ...RandomTypes];

export const typeDefs = [
    Mutation,
    Query,
    ...Types,
];
