const moment = require('moment')

console.log(moment(undefined, 'YYYY/MM/DD HH:mm:ss').toDate().getTime());
