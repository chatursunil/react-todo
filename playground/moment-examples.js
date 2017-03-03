const moment = require('moment');

console.log(moment().format());

console.log(moment().unix());

const timeStamp = 1488549359;

console.log('From unix:', moment.unix(timeStamp).format());

console.log('From unix:', moment.unix(timeStamp).fromNow());

console.log('Current Moment:', moment.unix(timeStamp).format('MMMM Do, YYYY @ h:mm A'))