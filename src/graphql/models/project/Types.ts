/**
 * Project type definition
 */
const Project = `
    type Project {
        id: ID!
        name: String
        description: String
        published: Boolean
    }
`;

/**
 * ProjectInput type definition
 * This is the type of input data of project passed to the createProject resolver
 */
const ProjectInput = `
    input ProjectInput {
        name: String!
        description: String
        published: Boolean
    }
`;

export const ProjectTypes: string[] = [Project, ProjectInput];
