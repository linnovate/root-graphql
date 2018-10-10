import _ from 'lodash';
import config from 'config';

const rootCnf = config.get('root');
console.log('sss', rootCnf)

export default {
  apiBaseUrl: `${rootCnf.host}:${rootCnf.port}/api`,
  toQueryString: obj => {
    return _.map(obj, (v, k) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
  }
};
