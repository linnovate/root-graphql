var request = require('request');

var GraphQLList = require('graphql').GraphQLList;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLNonNull = require('graphql').GraphQLNonNull;

var ProjectType = require('../../types/project');
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