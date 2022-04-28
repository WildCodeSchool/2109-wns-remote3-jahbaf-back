/**
 *  Ici on retrouve un "model" de chacuns nos Resolvers de mutation.
 *  Exemple:
 *  login(email: String, password: String) AuthMessage!
 *  logout: Void
 *  findOneTask(id: String!) Task!
 */
export const Query = `
  type Query {
    self: AuthPayload!
    findManyProjects: [Project!]!
    findProjectById(id: String!): Project!
    selectOneTask(id: String!): Task!
    login(email: String!, password: String!): String!
    selectAllTasksFromProject(id: String!): [Task]!
    findRoleById(id: Int!): Role
    findAllRolesFromProject(projectId: String!): [Role]!
  }
`;
