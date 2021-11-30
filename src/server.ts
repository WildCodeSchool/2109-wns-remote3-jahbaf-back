import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import { typeDefs } from './graphql/models';
import { dateScalar } from 'src/resolvers/dateType/dateScalar.type';
import * as Query from './resolvers/Query';
import * as Mutation from './resolvers/Mutation';

/** Logger related imports */
// import fs from 'fs';
// import morgan from 'morgan';

dotenv.config();

const PORT = process.env.PORT || 4000;

async function startServer() {
    const app = express();

    /**
     * Those two lines are defining the logger system, it will create an access.log file at the root of the project
     * Leave this commented if you use Apollo studio to check your queries since Apollo studio loop requests, you may end up with an enormous file.
     * Comment it out if you want to log the calls you make on the front end.
     */
    // const accessLogStream = fs.createWriteStream('./access.log', {flags: 'a'});
    // app.use(morgan('combined',{stream: accessLogStream}));

    /** *
     * Cette instance d'apollo server prend 3 paramètres:
     * typeDefs: Défini des types représentants models en db, resolver et custom type
     * Resolvers: L'équivalent d'un controller en API REST
     * Context: Correspond en quelque sorte à un middleware, nous devrions l'utiliser pour contrôler le Authorization Header lorsque nous implementerons l'authentification
     */
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers: { Query, Mutation, Date: dateScalar },
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({
        app,
        cors: {
            credentials: true,
            // Target front-end in production
            origin: '*',
        },
    });

    app.listen(PORT, () => console.log('Server is running on port 4000'));
}

startServer();
