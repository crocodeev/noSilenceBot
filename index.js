
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

let getTodayEventsSPB = new CronJob('0 * 9 * * *',
()=>{
  calendar.getEvents(calendar.configSPB, "today", "spb");
});

let getInWeekEventsSPB = new CronJob('30 * 9 * * *',
()=>{
  calendar.getEvents(calendar.configSPB, "week", "spb");
});

let getTodayEventsMSK = new CronJob('0 * 9 * * *',
()=>{
  calendar.getEvents(calendar.configMSK, "today", "msk");
});

let getInWeekEventsMSK = new CronJob('30 * 9 * * *',
()=>{
  calendar.getEvents(calendar.configMSK, "week", "msk");
});

getTodayEventsSPB.start();
getInWeekEventsSPB.start();
getTodayEventsMSK.start();
getInWeekEventsMSK.start();
