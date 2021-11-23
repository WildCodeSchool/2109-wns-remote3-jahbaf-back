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
 }`;

/**
  * Void type definition
  */
export const Void = `
 scalar Void
 `;

/**
  * Message type definition
  */
export const Message = `
 type Message {
   message: String!
 }
 `;

export const AuthTypes: string[] = [User, AuthPayload, Void, Message];
