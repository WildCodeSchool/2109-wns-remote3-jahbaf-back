import { CustomTypes } from '../customTypes/Types';
import { AuthTypes } from './auth/Types';
import { TaskTypes } from './task/Types';
import { ProjectTypes } from './project/Types';
import { RolesTypes } from './roles/Types';
import { Query } from './Query';
import { SprintTypes } from './sprint/Types';
import { TaskStatusTypes } from './taskStatus/Types';
import { Mutation } from './Mutations';
import { UtilsTypes } from './utils/Types';
import { CommentTypes } from './comment/Types';

export const Types = [
    ...AuthTypes,
    ...ProjectTypes,
    ...TaskStatusTypes,
    ...TaskTypes,
    ...SprintTypes,
    ...CommentTypes,
    ...CustomTypes,
    ...RolesTypes,
    ...UtilsTypes,
];

export const typeDefs = [Mutation, Query, ...Types];
