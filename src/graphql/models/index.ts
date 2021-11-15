import { AuthTypes } from './auth/Types';
import { RandomTypes } from './hello/Types';
import { UserTypes } from './users/Types';
import { Mutation } from './Mutations';
import { Query } from './Query';

export const Types = [...AuthTypes, ...UserTypes, ...RandomTypes];

export const typeDefs = [Mutation, Query, ...Types];
