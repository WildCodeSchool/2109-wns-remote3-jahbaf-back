import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import { typeDefs } from './graphql/typeDefs';

import { Query, Mutation } from './resolvers/index';
import { PrismaClient } from '.prisma/client';

dotenv.config();

const PORT = process.env.PORT || 4000;

async function startServer(){
  const app = express();
  /** *
   * Cette instance d'apollo server prend 3 paramètres:
   * typeDefs: Défini des types représentants models en db, resolver et custom type
   * Resolvers: L'équivalent d'un controller en API REST
   * Context: ???
   */
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: { Query, Mutation },
    },
  );

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app, 
    cors: {
      credentials: true,
      // Target front-end in production
      origin: '*',
    }});
    
  app.use((req, res) => {
    res.send('Hello from express apollo server');
  });
  app.listen(PORT, () => console.log('Server is running on port 4000'));
}

startServer();