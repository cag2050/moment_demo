const moment = require('moment')

console.log(moment('1978/01/01 08:00:00', 'YYYY/MM/DD HH:mm:ss').toDate().getTime());
console.log(moment('2019/01/01 08:00:00', 'YYYY/MM/DD HH:mm:ss').toDate().getTime());

// 当前日期，减1个小时后，获取时间戳
let arr = []
let subtractOneHourStamp = moment().subtract(1, 'hours').toDate().getTime()
let startTimeStamp = moment('1978/01/01 08:00:00', 'YYYY/MM/DD HH:mm:ss').toDate().getTime()
// let startTimeStamp = moment(arr[0], 'YYYY/MM/DD HH:mm:ss').toDate().getTime()
console.log('startTimeStamp')
console.log(startTimeStamp)
// 活动生效时间的前1小时
// 活动生效时间 活动生效时间的前1小时
if (startTimeStamp > subtractOneHourStamp) {
    console.log(111)
} else {
    console.log(222)
}

