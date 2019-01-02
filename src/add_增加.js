let moment = require('moment')
// 添加1天，并格式化
console.log(moment().add(1, 'days').format('YYYYMMDD'))
console.log(moment().subtract(30, 'days').format('YYYY-MM-DD HH:mm:ss'));
