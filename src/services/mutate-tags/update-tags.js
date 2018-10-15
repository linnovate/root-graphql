var request = require('request');

module.exports = function (data) {
  return new Promise((resolve, reject) => {    
    console.log('Updating tag...');
    const idx = data.data.tags.indexOf(data.tag);
    if(data.op === 'add')
      if(idx === -1)  data.data.tags.push(data.tag);
      else return reject(new Error(`The tag ${data.tag} already exists in reservation ${data.bookingNo}.`));
    else if(data.op === 'remove')
      if(idx !== -1)  data.data.tags.splice(idx, 1);
      else return reject(new Error(`The tag ${data.tag} does not exist in reservation ${data.bookingNo}.`));
    else return reject(new Error('Wrong op'));

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
