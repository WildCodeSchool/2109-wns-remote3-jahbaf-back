/**
 *  Ici on retrouve un "model" de chacuns nos Resolvers de mutation.
 *  Exemple:
 *  signUp(email: String, password: String) AuthMessage!
 *  createOneTask(title: String!, description: String!, priority: String!, points: Int): Message!
 */
export const Mutation = `
  type Mutation {
    signUp(name: String, email: String, password: String): AuthPayload!
    createProject(projectInput: ProjectInput! ): ProjectCreatePayLoad!
  }
`;
