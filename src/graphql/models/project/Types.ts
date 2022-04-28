/**
 * Project type definition
 */
const Project = `
    type Project {
        id: ID!
        name: String
        description: String
        published: Boolean
        projectUsers: [ProjectUser]
    }
`;

const ProjectUser = `
    type ProjectUser {
        id: Int!
        roleId: Int!
        projectId: String!
        userId: String!
        user: User
    }
`;

/**
 * ProjectInput type definition
 * This is the type of input data of project passed to the createProject resolver
 */
const ProjectInput = `
    input ProjectInput {
        projectName: String!
        projectDescription: String
        published: Boolean
        roleName: String!
    }
`;

/**
 * UpdateProjectInput type definition
 * This is the type of input data of project passed to the updateProject resolver
 */
const UpdateProjectInput = `
 input UpdateProjectInput {
     id: ID!
     name: String
     description: String
     published: Boolean
 }
`;

const AddUserToProjectInput = `
 input AddUserToProjectInput {
    roleId: Int!,
    projectId: String!
 }
`;

export const ProjectTypes: string[] = [
    Project,
    ProjectInput,
    UpdateProjectInput,
    AddUserToProjectInput,
    ProjectUser
];
