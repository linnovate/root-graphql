import request from 'request';
import { GraphQLID, GraphQLNonNull } from 'graphql';

import ProjectType from '../../types/project';
import { default as utils } from '../../../services/utils';

module.exports = {
  type: ProjectType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    },
    uid: {
        name: 'uid',
        type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, args, req) => {
    return new Promise(function (resolve, reject) {
      request(utils.apiBaseUrl + '/projects/' + args.id + '?' + utils.toQueryString(args), function (error, response, body) {
        if (error) return resolve({});
        body = JSON.parse(body);
        return resolve(body);
      });
    });
  }
};