import { CustomTypes } from '../customTypes/Types';
import { AuthTypes } from './auth/Types';
import { RandomTypes } from './hello/Types';
import { Mutation } from './Mutations';
import { Query } from './Query';
import { SprintTypes } from './sprint/Types';

export const Types = [
    ...AuthTypes,
    ...SprintTypes,
    ...RandomTypes,
    ...CustomTypes,
];

export const typeDefs = [Mutation, Query, ...Types];
