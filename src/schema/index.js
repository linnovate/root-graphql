var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLSchema = require('graphql').GraphQLSchema;

var queries = require('./queries');

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: queries
  }),
  // mutation: new GraphQLObjectType({
  //   name: 'Mutation',
  //   fields: mutations
  // })
});