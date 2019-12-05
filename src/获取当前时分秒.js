let moment = require('moment')

console.log(moment().format(' HH:mm:ss'))
console.log(moment().toDate().getTime())
let nowStamp = moment().toDate().getTime()
console.log(moment().subtract(1, 'days').toDate().getTime())
let yesterdayStamp = moment().subtract(1, 'days').toDate().getTime()
// getTime 返回的是 毫秒数
console.log(nowStamp - yesterdayStamp)
// 一天的毫秒数
console.log(24 * 60 * 60 * 1000)
