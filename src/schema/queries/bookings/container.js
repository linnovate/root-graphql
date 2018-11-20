import request from 'request';
import moment from 'moment';
import { GraphQLList, GraphQLInt, GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';

import { default as utils } from '../../../services/utils';
import ContainerType from '../../types/container';

module.exports = {
  type: new GraphQLList(ContainerType),
  args: {
    // uid: {
    //   name: 'uid',
    //   type: new GraphQLNonNull(GraphQLID)
    // },
    taskID: {
      name: 'task',
      type: GraphQLString
    }
  },
  resolve: (root, args, req) => {
    return new Promise(function (resolve, reject) {
      console.log(`${utils.apiBaseUrl}/api/tasks/${args.taskID}`);
      var options = {
        url: `http://localhost:3002/api/tasks/subtasks/5bc5f7e10f836f4d57f97dcd`,
        headers: {
          'Content-Type': 'application/graphql',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.JTdCJTIyX2lkJTIyOiUyMjViYzVhOGY5MGY4MzZmMGZkOGY5N2Q1ZCUyMiwlMjJ1aWQlMjI6JTIyMWI2MzBlOTAtZDEyMi0xMWU4LWFjMzEtM2Y5ZTdjZjY2NTAyJTIyLCUyMmlkJTIyOiUyMmFzYWZlQGRhbmhvdGVscy5jb20lMjIsJTIybmFtZSUyMjolMjJhZG1pbiUyMiwlMjJlbWFpbCUyMjolMjJhc2FmZUBkYW5ob3RlbHMuY29tJTIyLCUyMnVzZXJuYW1lJTIyOiUyMmFkbWluJTIyLCUyMl9fdiUyMjowLCUyMnByb2ZpbGUlMjI6JTdCJTIyZnJlcXVlbnRVc2VycyUyMjolN0IlMjIlNUJvYmplY3QlMjBPYmplY3QlNUQlMjI6MyU3RCU3RCwlMjJHZXRNYWlsRXZlcnlEYXlBYm91dE15VGFza3MlMjI6JTIybm8lMjIsJTIyR2V0TWFpbEV2ZXJ5V2Vla0Fib3V0R2l2ZW5UYXNrcyUyMjolMjJubyUyMiwlMjJHZXRNYWlsRXZlcnlXZWVrQWJvdXRNeVRhc2tzJTIyOiUyMm5vJTIyLCUyMnByb3ZpZGVyJTIyOiUyMmxvY2FsJTIyLCUyMnJvbGVzJTIyOiU1QiUyMmF1dGhlbnRpY2F0ZWQlMjIlNUQlN0Q.vVnxozwEf01cP428vHABGndDxnUBY6A4zRcnSn35pmU'
        }
      };
      
      function callback(error, response, body) {
        console.log('ROOT RESPONSE ERROR:', error);
        if (error) return resolve([]);
        let data = JSON.parse(body);
        console.log('sub-task: ',data);
        return resolve(data);
      }
      
      request(options, callback)





      // request(`${utils.apiBaseUrl}/tasks/subtasks/${args.taskID}`, (error, response, body) => {
      //   console.log('ROOT RESPONSE ERROR:', error);
      //   if (error) return resolve([]);
      //   let data = JSON.parse(body);
      //   console.log('sub-task: ',data);
      //   return resolve(data);
      // });
    });
  }
};
