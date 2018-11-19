import request from 'request';
import moment from 'moment';
import { GraphQLList, GraphQLInt, GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';

import { default as utils } from '../../../services/utils';
import ShobType from '../../types/shob';

module.exports = {
  type: ShobType,
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
    dateRange: {
      type: GraphQLInt
    },
    dateFrom: {
      type: GraphQLString
    }
  },
  resolve: (root, args, req) => {
    return new Promise(function (resolve, reject) {
      args.start = args.start || 0;
      args.limit = args.limit || 0;
      args.sort = args.sort || 'created';
      console.log(`${utils.apiBaseUrl}/customData?uid=${args.uid}&type=reservation`);
      request(`${utils.apiBaseUrl}/customData?uid=${args.uid}&type=reservation`, (error, response, body) => {
        console.log('ROOT RESPONSE ERROR:', error);
        if (error) return resolve([]);
        let data = JSON.parse(body);
        console.log('data length: ',data.length);
        let d ,date = new Date();
        if (args.dateFrom)
          d = new Date(args.dateFrom);
        else d = new Date();
        d = moment(d).utc().startOf('day'); 
        d = new Date(d)
        date.setDate(d.getDate() + args.dateRange);
        date = moment(date).utc().endOf('day');
        date = new Date(date);
        console.log('******************************----------',date,'---',d,'--------------------***********************')
        data = data.filter((q) => {         
          return (date >= new Date(q.custom.data.booking_from) && d <= new Date(q.custom.data.booking_from) || d <= new Date(q.custom.data.booking_to) && d > new Date(q.custom.data.booking_from))
        });
        data = data.sort((a,b) => (new Date(a.custom.data.booking_from) > new Date(b.custom.data.booking_from)) ? 1 : ((new Date(a.custom.data.booking_from) < new Date(b.custom.data.booking_from)) ? -1 : 0)); 
        console.log('data length after filtering: ',data.length);
        return resolve(data);
      });
    });
  }
};
