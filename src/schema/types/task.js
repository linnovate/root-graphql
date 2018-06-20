import { GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import GraphQLJSON from 'graphql-type-json';

module.exports = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    customId: {
        type: GraphQLString
    },
    customData: {
        type: GraphQLJSON
    },
    created: {
      type: GraphQLString,
    },
    updated: {
      type: GraphQLString,
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: GraphQLString
    }
  })
});