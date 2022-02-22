const Role = `
    type Role {
        id: ID!
        name: String
        projectId: String!
    }
`;

const RoleInput = `
    input RoleInput {
        name: String!
        projectId: String!
    }
`;

const FindRoleByIdInput = `
    input FindRoleByIdInput {
        id: ID!
        projectId: String!
    }
`;

const UpdateRoleInput = `
    input UpdateRoleInput {
        id: ID!
        name: String
        projectId: String!
    }
`;

export const RolesTypes: string[] = [
    Role,
    RoleInput,
    UpdateRoleInput,
    FindRoleByIdInput
];
