import { GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import GraphQLJSON from 'graphql-type-json';

module.exports = new GraphQLObjectType({
  name: 'Lead',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    title: {
        type: GraphQLString
    },
    email: {
        type: GraphQLJSON,
        resolve: root => root.customData.email
    },
    guestId: {
      type: GraphQLString,
      resolve: root => root.customData.guestId
    },
    clubCode: {
      type: GraphQLString,
      resolve: root => root.customData.clubCode
    },
    lastName: {
      type: GraphQLString,
      resolve: root => root.customData.lastName
    },
    checkin: {
      type: GraphQLString,
      resolve: root => root.customData.checkin
    },
    checkout: {
      type: GraphQLString,
      resolve: root => root.customData.checkout
    },
    hotelID: {
      type: GraphQLString,
      resolve: root => root.customData.hotelID
    },
    phone: {
      type: GraphQLString,
      resolve: root => root.customData.phone
    }
  })
});