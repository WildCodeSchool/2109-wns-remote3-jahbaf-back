/**
 *  Ici on retrouve un "model" de chacuns nos Resolvers de mutation.
 *  Exemple:
 *  login(email: String, password: String) AuthMessage!
 *  logout: Void
 *  findOneTask(id: String!) Task!
 */
export const Query = `
  type Query {
    findManyProjects: [Project!]!
    findProjectById(id: String!): Project!
    selectOneTask(id: String!): Task!
  }
`;
