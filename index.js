
//cron

const CronJob = require('cron').CronJob;

//calendar

const calendar= require('./custoModules/calendar.js');

//server


const express = require('express');
const app = express();

app.use(express.json());

app.use('/nosilence', require('./routes/inplay.js'));

app.use('/test', require('./routes/test.js'));

app.use('/', require('./routes/hitch.js'))


app.listen(3000, () => {
  console.log("server start on 3000 port!");
});


// calendar polling

let getTodayEventsSPB = new CronJob('0 */2 * * * *',
()=>{
  calendar.getEvents(calendar.configSPB, "today");
});

let getInWeekEventsSPB = new CronJob('0 */2 * * * *',
()=>{
  calendar.getEvents(calendar.configSPB, "week");
});

let getTodayEventsMSK = new CronJob('0 */2 * * * *',
()=>{
  calendar.getEvents(calendar.configSPB, "today");
});

let getInWeekEventsMSK = new CronJob('0 */2 * * * *',
()=>{
  calendar.getEvents(calendar.configSPB, "week");
});

getTodayEventsSPB.start();
getInWeekEventsSPB.start();
getTodayEventsMSK.start();
getInWeekEventsMSK.start();
