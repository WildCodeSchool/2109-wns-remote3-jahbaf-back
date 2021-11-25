import { AuthTypes } from './auth/Types';
import { Mutation } from './Mutations';
import { ProjectTypes } from './project/Types';
import { Query } from './Query';

export const Types = [...AuthTypes, ...ProjectTypes];

export const typeDefs = [
    Mutation,
    Query,
    ...Types,
];
