let moment = require('moment')

// 当前时间戳
console.log(Date.now());
// 置顶日期时间戳
console.log(moment('2019-06-19 20:21:00', 'YYYY-MM-DD HH:mm:ss').toDate().getTime());

if (Date.now() > moment('2019-06-19 20:21:00', 'YYYY-MM-DD HH:mm:ss').toDate().getTime()) {
    console.log('开始时间需大于当前时间')
}
