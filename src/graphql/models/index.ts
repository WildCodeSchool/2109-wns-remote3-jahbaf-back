import { AuthTypes } from './auth/Types';
import { Mutation } from './Mutations';
import { Query } from './Query';

export const Types = [...AuthTypes];

export const typeDefs = [
    Mutation,
    Query,
    ...Types,
];
