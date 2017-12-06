import request from 'request';
import { GraphQLList, GraphQLInt, GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';

import { default as utils } from '../../../services/utils';
import ProjectType from '../../types/project';

module.exports = {
  type: new GraphQLList(ProjectType),
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
    }
  },
  resolve: (root, args, req) => {
    return new Promise(function (resolve, reject) {
      args.start = args.start || 0;
      args.limit = args.limit || 0;
      args.sort = args.sort || 'created';
      request(utils.apiBaseUrl + '/projects?' + utils.toQueryString(args), function (error, response, body) {
        console.log('ROOT RESPONSE ERROR:', error);
        if (error) return resolve([]);
        body = JSON.parse(body);
        return resolve(body.content);
      });
    });
  }
};