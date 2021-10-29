/**
 *  Ici on retrouve un "model" de chacuns nos Resolvers de mutation.
 *  Exemple: 
 *  signup(email: String, password: String) AuthMessage!
 *  createOneTask(title: String!, description: String!, priority: String!, points: Int): Message!
 */ 
export const Mutation = `
  type Mutation {
    signup(name: String, email: String, password: String): AuthPayload!
  }
`;