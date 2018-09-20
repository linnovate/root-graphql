import express from 'express' ;
import config from 'config';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import schema from './src/schema';
console.log('ss')
const app = express();

app.use('/graphql',cors(), graphqlHTTP({
    schema: schema,
    graphiql: true
}));
console.log(`App listening at ${config.get('port')} port`);
app.listen(config.get('port'));