import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './graphql/schema';

async function startApolloServer() {

    const PORT = 8080;
    const app: Application = express();
    const server: ApolloServer = new ApolloServer({ schema });
    await server.start();

    server.applyMiddleware({ app, path: '/graphql' });

    app.listen(PORT, () => {
        console.log(`server is running at http://localhost:${PORT}`)
    });
}

startApolloServer();