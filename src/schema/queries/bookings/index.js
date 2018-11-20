const beforeArrival = require('./beforeArrival');
const afterStay = require('./afterStay');
const addTag = require('./addTag');
const removeTag = require('./removeTag');
const shob = require('./shob');
const container = require('./container');

module.exports = {
    bookingBeforeArrival: beforeArrival,
    bookingAfterStay: afterStay,
    addTag: addTag,
    removeTag: removeTag,
    shob: shob,
    container: container
};
