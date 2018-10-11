import request from 'request';
import { GraphQLList, GraphQLInt, GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';

import { default as utils } from '../../../services/utils';
import BookingType from '../../types/booking';

module.exports = {
  type: BookingType,
  args: {
    limit: {
      name: 'limit',
      type: GraphQLInt
    },
    skip: {
      name: 'skip',
      type: GraphQLInt
    },
    uid: {
      name: 'uid',
      type: new GraphQLNonNull(GraphQLID)
    },
    sort: {
      name: 'sort',
      type: GraphQLString
    },
    tag: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    },
    bookingNo: {
      type: GraphQLString
    }
  },
  resolve: (root, args, req) => {
    return new Promise(function (resolve, reject) {
      args.start = args.start || 0;
      args.limit = args.limit || 0;
      args.sort = args.sort || 'created';
   
      console.log(`******* Removing ${args.tag} tag from reservation ${args.bookingNo}... *******`);
      
      return utils.mutateTags({
        tag: args.tag,
        op: 'remove',
        bookingNo: args.bookingNo,
        config: {
          email: args.email,
          password: args.password,
          uid: args.uid,
          url: utils.apiBaseUrl
        }
      })
      .then(data => {
        console.log(`******* Tag ${args.tag} removed. *******`);
        return resolve(data);
      })
      .catch(err => reject(err));
    });
  }
};
