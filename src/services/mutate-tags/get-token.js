var request = require('request');

module.exports = function (data) {
  return new Promise((resolve, reject) => {
    console.log('Getting root token...');
    var options = {
      method: 'POST',
      url: data.config.url + '/login',
      headers:
        {
          'Content-Type': 'application/json'
        },
      body: {
        email: data.config.email,
        password: data.config.password
      },
      json: true
    };

    request(options, function (error, response, body) {
      if (error) return reject(new Error(error));
      if(body === 'Unauthorized') return reject(new Error(body));
      data.token = body.token;
      console.log('Root token: ', data.token);
      resolve(data);
    });
  })
}
