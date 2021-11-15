/**
 * User type definition
 */
export const User = `
    type User {
        id: ID!
        name: String!
        email: String!
        password: String
        activated: Boolean
    }
`;

export const UserTypes: string[] = [User];
