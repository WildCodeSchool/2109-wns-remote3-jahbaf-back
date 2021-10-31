import { AuthTypes } from './auth/Types';
import { RandomTypes } from './hello/Types';
import { Mutation } from './mutations';
import { Query } from './queries';

export const Types = [...AuthTypes, ...RandomTypes];

export const typeDefs = [
    Mutation,
    Query,
    ...Types,
];
