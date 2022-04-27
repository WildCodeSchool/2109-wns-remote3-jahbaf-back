/**
 * AuthPayload type definition
 * This is the type of the data returned when a user signs up
 */
export const AuthPayload = `
 type AuthPayload {
   user: User!
 }
 `;

/**
 * User type definition
 */
export const User = `
 type User {
   id: ID!
   name: String
   email: String
   password: String
   activated: Boolean
   confirmed: Boolean
 }`;

export const AuthTypes: string[] = [User, AuthPayload];
