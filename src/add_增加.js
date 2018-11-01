let moment = require('moment')
// 添加1天，并格式化为 YYYYMMDD
console.log(moment().add(1, 'days').format('YYYYMMDD'))
console.log(moment().subtract(30, 'days').format('YYYY-MM-DD'));