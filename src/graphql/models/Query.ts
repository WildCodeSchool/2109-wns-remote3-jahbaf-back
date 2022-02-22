/**
 *  Ici on retrouve un "model" de chacuns nos Resolvers de mutation.
 *  Exemple:
 *  login(email: String, password: String) AuthMessage!
 *  logout: Void
 *  findOneTask(id: String!) Task!
 */
export const Query = `
  type Query {
    self(id: String!): AuthPayload!
    findManyProjects: [Project!]!
    findProjectById(id: String!): Project!
    selectOneTask(id: String!): Task!
    selectAllTasksFromProject(id: String!): [Task]!
    findRoleById(findRoleByIdInput: FindRoleByIdInput!): Role!
    findAllRolesFromProject(projectId: String!): [Role]!
  }
`;
