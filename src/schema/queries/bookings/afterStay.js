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
    hotels: {
      type: new GraphQLList(GraphQLString)
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

        let data;

        try {
          data = JSON.parse(body);
        }
        catch(e) {}

        if(data == null || !Array.isArray(data))
          console.log('Invalid data returned: ', body);

        data = data.filter(res => args.hotels.indexOf(res.custom.data.hotel_id) !== -1 && res.tags.includes('LAS'));
        console.log(data);
        return resolve(data);
      });
    });
  }
};
