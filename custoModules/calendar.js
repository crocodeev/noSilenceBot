const Scrapegoat = require("scrapegoat");
const moment = require('moment');
const format = "YYYYMMDD[T]HHmmss[Z]";

const bot = require('../telegram/bot');
const settings = require('../settings');
const messageHandler = require('../custoModules/messageHandler');


const configMSK = {

  auth: {
        user: settings.calendar.user,
        pass: settings.calendar.password,
    },
    uri: settings.calendar.uri.msk
}

const configSPB = {

  auth: {
        user: settings.calendar.user,
        pass: settings.calendar.password,
    },
    uri: settings.calendar.uri.spb
}

const configDUTY = {

  auth: {
        user: settings.calendar.user,
        pass: settings.calendar.password,
    },
    uri: settings.calendar.uri.duty
}



function getEvents(config,when,where) {


  const scrapegoat = new Scrapegoat(config);

  let dateObj = getRequestDate(when);

  scrapegoat.getEventsByTime(dateObj.start, dateObj.end)
  .then(
    (responce) => {
     if(responce.length > 0 ){
       let message =  messageHandler.formatCalendar(when, responce);
       return message;
     }else{
       console.log("nothing todo for this date");
     }
    }
  )
  .then(
    (message) => {

      if (typeof message === 'undefined') {
        console.log("really nothing to do");
      } else {
        switch (where) {
          case "spb":
          bot.sendMessage(settings.spbChatID, message);
          break;
          case "msk":
          bot.sendMessage(settings.mskChatID, message);
          break;
          default:
          bot.sendMessage(settings.testChatID, message);
        }
      }
    }
  )
  .catch(
    (e) => {
      console.log(e);
    }
  );

}

function getRequestDate(when) {
    if (when != "today") {
      let obj = {};
      let start = moment().add(1, when).startOf("day");
      let end = moment().add(1, when).endOf("day");

      obj.start = start.format(format);
      obj.end   = end.format(format);
      return obj;
    }else{
      let obj = {};
      let start = moment().startOf("day");
      let end = moment().endOf("day");

      obj.start = start.format(format);
      obj.end   = end.format(format);
      return obj;
    }
}

module.exports.getEvents = getEvents;
module.exports.configMSK = configMSK;
module.exports.configSPB = configSPB;
module.exports.configSPB = configDUTY;
