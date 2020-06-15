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

console.log(calendar.configSPB);

let job = new CronJob('0 */10 * * * *',
сalendar.getEvents(calendar.configSPB, "today"));



job.start();
