
//cron

//const CronJob = require('cron').CronJob;

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


//let job = new CronJob('0 */10 * * * *',
//сalendar.getEvents(calendar.configSPB, "today"));

/*const configSPB = {

  auth: {
        user: "ak@inplay.pro",
        pass: "na2uo4PH@ak!!"
    },
    uri: "https://nc.inplay.space/remote.php/dav/calendars/Kogodeev/--1_shared_by_velkov/"
}*/

//let job1= new CronJob('0 */1 * * * *',
//()=>{
//  calendar.getEvents(configSPB, "today");
//});

//let job2 = new CronJob('0 */2 * * * *',
//()=>{console.log("job done");});

//job2.start();
//job1.start();
