/**
 *  Ici on retrouve un "model" de chacuns nos Resolvers de mutation.
 *  Exemple: 
 *  login(email: String, password: String) AuthMessage!
 *  logout: Void
 *  findOneTask(id: String!) Task!
 */ 
export const Query = `
  type Query {
    hello: Message!
    login(email: String, password: String): AuthPayload!
  }
`;