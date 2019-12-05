const moment = require('moment')

let AA = "2019-01-08";
let BB = "2019-01-09";

let start_date = moment(AA,"YYYY-MM-DD");
let end_date = moment(BB,"YYYY-MM-DD");

let days = end_date.diff(start_date, "days");

console.log(end_date.toDate().getTime())

console.log(days);

