import request from 'request';
import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';

import TaskType from '../../types/task';
import { default as utils } from '../../../services/utils';

module.exports = {
  type: TaskType,
  args: {
    id: {
      name: 'id',
      type: GraphQLID
    },
    uid: {
        name: 'uid',
        type: new GraphQLNonNull(GraphQLID)
    },
    customId: {
      name: 'customId',
      type: GraphQLString
    },
    customData: {
      type: GraphQLString
    }
  },
  resolve: (root, args, req) => {
    return new Promise(function (resolve, reject) {
      let url = '';
      if (args.id) {
        url = `${utils.apiBaseUrl}/tasks/${args.id}?${utils.toQueryString(args)}`;
      } else if (args.customId) {
        url = `${utils.apiBaseUrl}/customData/${args.customId}?uid=${args.uid}`;
      } else if (args.customData) {
        url = `${utils.apiBaseUrl}/customData?uid=${args.uid}&${args.customData}`;
      }
      request(url, function (error, response, body) {
        console.log(body)
        console.log('ROOT RESPONSE ERROR:', error);
        if (error) return resolve({});
        body = JSON.parse(body);
        return resolve(body);
      });
    });
  }
};