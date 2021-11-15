/**
 * AuthPayload type definition
 * This is the type of the data returned when a user signs up
 */
export const AuthPayload = `
 type AuthPayload {
   user: User!
 }
 `;

export const AuthTypes: string[] = [AuthPayload];
