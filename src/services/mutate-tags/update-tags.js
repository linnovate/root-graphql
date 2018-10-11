var request = require('request');

module.exports = function (data) {

  if(data.op === 'add' )
    data.data.tags.push(data.tag);
  else if(data.op === 'remove'){
    const idx = data.data.tags.indexOf(data.tag);
    if(idx !== -1)  data.data.tags.splice(idx, 1);
  }

  return new Promise((resolve, reject) => {    
    var options = {
      method: 'PUT',
      url: data.config.url + '/tasks/' + data.data._id,
      headers:
        {
          Authorization: 'Bearer '+ data.token,
          'Content-Type': 'application/json'
        },
      json: data.data
    };

    request(options, function (error, response, body) {
      if (error) return reject(new Error(error));
      if(body.error) return reject(new Error(body.error.message));

      console.log(body);
      data.data = body;
      resolve(data);
    });
  });
}
