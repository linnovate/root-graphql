import { GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import GraphQLJSON from 'graphql-type-json';

const GuestType = new GraphQLObjectType({
  name: 'Guest',
  fields: () => ({
    guestId: {
      type: GraphQLString,
      resolve: root => root.profile_id
    },
    email: {
      type: GraphQLString,
      resolve:  root => root.email
    },
    lastName: {
      type: GraphQLString,
      resolve: root => root.last_name && root.last_name[0]
    },
    firstName: {
      type: GraphQLString,
      resolve: root => root.first_name && root.first_name[0]
    }
  })
})

module.exports = new GraphQLObjectType({
  name: 'Booking',
  fields: () => ({
    hotelID: {
      type: GraphQLID,
      resolve: root => root.custom.data.hotel_id
    },
    masterID: {
      type: GraphQLID,
      resolve: root => root.custom.data.booking_no
    },
    roomType: {
      type: GraphQLString,
      resolve: root => root.custom.data.room_type
    },
    guest: {
      type: GuestType,
      resolve: root => root.custom.data.guests && root.custom.data.guests[0]
    }
  })
});
