var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log(now.unix());

var timestamp = now.unix();

var currMoment = moment.unix(timestamp);

console.log(currMoment.format());
console.log(currMoment.format('llll'));
console.log(currMoment.format('MMMM Do, YYYY @ h:mm A'));
