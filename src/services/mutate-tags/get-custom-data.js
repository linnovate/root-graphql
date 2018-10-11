var request = require('request');

module.exports = function (data) {
  return new Promise((resolve, reject) => {
    var options = {
      method: 'GET',
      url: data.config.url + '/customData/' + data.bookingNo,
      qs: {
        uid: data.config.uid
      },
      headers: {
        'Content-Type': 'application/json'
      }
    };

    request(options, function (error, response, body) {
      if (error) return reject(new Error(error));
      try {
        body = JSON.parse(body);
      }
      catch (err) {
        return reject(new Error(err));
      }
      if (body.status > 300) return reject(new Error(body.message));

      delete body.__v;
      body.visible = false;
      body.star = false;

      console.log('Data from root: ', require('util').inspect(body, { showHidden: false, depth: null }));
      data.data = body;
      resolve(data);
    });
  });
}

