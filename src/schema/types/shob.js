var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLList = require('graphql').GraphQLList;
import BookingType from './booking';

module.exports = new GraphQLObjectType({
  name: 'Shob',
    fields: () => ({
      data: {
        type: new GraphQLList(BookingType),
        resolve: root => root
      },
      date: {
        type: GraphQLString,
        resolve: () => new Date()
      }
    })
});