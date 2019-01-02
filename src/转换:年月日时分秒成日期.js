const moment = require('moment')

console.log(moment('1978/01/01 08:00:00', 'YYYY/MM/DD HH:mm:ss').toDate().getTime());
