import request from 'request';
import { GraphQLList, GraphQLInt, GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';

import { default as utils } from '../../../services/utils';
import EntityType from '../../types/entity';
import Data from './dan';

module.exports = {
  type: new GraphQLList(EntityType),
  resolve: (root, args, req) => {
    return Data
  }
};