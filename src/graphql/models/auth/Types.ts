import { TypesBuilder } from '../../helpers';
import { authTypes, baseGraphQLTypes } from '../base';

/**
 * AuthPayload type definition
 * This is the type of the data returned when a user signs up
 */
const authPayload = new TypesBuilder(authTypes.AUTH_PAYLOAD);
const AuthPayload = authPayload.addTypes({
    user: authTypes.USER
}).getType();

/**
 * User type definition
 */
const user = new TypesBuilder(authTypes.USER);
const User = user.addTypes({
    id:        baseGraphQLTypes.ID,
    email:     baseGraphQLTypes.STRING,
    name:      baseGraphQLTypes.STRING,
    password:  baseGraphQLTypes.STRING,
    activated: baseGraphQLTypes.BOOL,
}).getType();

export const AuthTypes: string[] = [AuthPayload, User];
