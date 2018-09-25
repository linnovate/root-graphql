import request from 'request';
import { GraphQLList, GraphQLInt, GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';

import { default as utils } from '../../../services/utils';
import BookingType from '../../types/booking';

module.exports = {
  type: new GraphQLList(BookingType),
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
    daysBefore: {
        type: GraphQLInt
    }
  },
  resolve: (root, args, req) => {
    return new Promise(function (resolve, reject) {
      args.start = args.start || 0;
      args.limit = args.limit || 0;
      args.sort = args.sort || 'created';
      request(`${utils.apiBaseUrl}/customData?uid=${args.uid}&type=reservation`, (error, response, body) => {
        console.log('ROOT RESPONSE ERROR:', error);
        if (error) return resolve([]);
        let data = JSON.parse(body);
        console.log('data before filtering: ', require('util').inspect(data.map(b => b.description), {maxArrayLength: null}));
        let date = new Date();
        date.setDate(date.getDate() + args.daysBefore);
        data = data.filter((q) => {
          return date.toDateString() === new Date(q.custom.data.booking_from).toDateString();
        });
        console.log('data after filtering: ', require('util').inspect(data, {showHidden: false, depth: null}));
        return resolve(data);
      });
    });
  }
};
