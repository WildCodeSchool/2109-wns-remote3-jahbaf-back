import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import { typeDefs } from './graphql/models';
import { dateScalar } from 'src/resolvers/dateType/dateScalar.type';
import * as Query from './resolvers/Query';
import * as Mutation from './resolvers/Mutation';
import { createContext } from './utils/context.utils';

dotenv.config();

const PORT = process.env.PORT || 4000;

async function startServer() {
    const app = express();

    /** *
     * Cette instance d'apollo server prend 3 paramètres:
     * typeDefs: Défini des types représentants models en db, resolver et custom type
     * Resolvers: L'équivalent d'un controller en API REST
     * Context: Correspond en quelque sorte à un middleware, nous devrions l'utiliser pour contrôler le Authorization Header lorsque nous implementerons l'authentification
     */
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers: { Query, Mutation, Date: dateScalar },
        context: createContext
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({
        app,
        cors: {
            credentials: true,
            origin: [
                process.env.FRONTEND_URL || 
                'http://localhost:3000',
                'https://studio.apollographql.com',
            ],
        },
    });

    app.listen(PORT, () => console.log(`Server is running on port ${4000}`));
}

startServer();
