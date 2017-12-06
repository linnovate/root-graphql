import { GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';


module.exports = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    created: {
      type: GraphQLString,
    },
    updated: {
      type: GraphQLString,
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
});