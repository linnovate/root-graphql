var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLID = require('graphql').GraphQLID;

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