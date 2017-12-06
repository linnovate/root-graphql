import express from 'express' ;
import config from 'config';
import graphqlHTTP from 'express-graphql';
import schema from './src/schema';

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));
console.log(`App listening at ${config.get('port')} port`);
app.listen(config.get('port'));