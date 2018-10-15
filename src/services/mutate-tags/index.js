const getCustomData = require('./get-custom-data');
const getToken = require('./get-token');
const updateTags = require('./update-tags');

module.exports = function (data) {
  return new Promise((resolve, reject) => {
    getCustomData(data)
      .then(data => {
        if (!condition(data.tag, data.op, data.data.custom.data.state))
          return reject(new Error('condition failed'));
        return getToken(data)
      })
      .then(data => updateTags(data))
      .then(data => resolve(data.data))
      .catch(err => reject(err));
  });
};

function condition(tag, op, state) {
  if (tag !== 'LAS')
    return true;
  if (tag === 'LAS')
    if (op === 'add')
      return state === 'CheckIn';
  if (op === 'remove')
    return state === 'CheckOut'
  return false;
}

