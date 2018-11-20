var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLString = require('graphql').GraphQLString;

module.exports = new GraphQLObjectType({
  name: 'Containers',
  fields: () => ({
    title: {
      type: GraphQLString,
      resolve: root => root.title
    },
    description: {
      type: GraphQLString,
      resolve:  root => root.description
    }
  })
});