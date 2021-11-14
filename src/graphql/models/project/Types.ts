/**
 * Project type definition
 */
const Project = `
type Project {
    id: ID!
    name: String
}`;

/**
 * ProjectInput type definition
 * This is the type of input data of project passed to the createProject resolver
 */
const ProjectInput = `
    input ProjectInput {
        name: String
    }
`;

export const ProjectTypes: string[] = [ Project, ProjectInput ];