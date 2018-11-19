const beforeArrival = require('./beforeArrival');
const afterStay = require('./afterStay');
const addTag = require('./addTag');
const removeTag = require('./removeTag');
const shob = require('./shob');

module.exports = {
    bookingBeforeArrival: beforeArrival,
    bookingAfterStay: afterStay,
    addTag: addTag,
    removeTag: removeTag,
    shob: shob
};
