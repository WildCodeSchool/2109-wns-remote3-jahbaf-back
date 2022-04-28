const Role = `
    type Role {
        id: Int!
        name: String!
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
        id: Int!
    }
`;

const UpdateRoleInput = `
    input UpdateRoleInput {
        id: Int!
        name: String!
    }
`;

export const RolesTypes: string[] = [
    Role,
    RoleInput,
    UpdateRoleInput,
    FindRoleByIdInput
];
