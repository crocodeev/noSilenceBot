const emoji = require('node-emoji').emoji;


/*
Description of handled messages:
* ALARM:NO SOUND or NO SOUND
* HIGH TEMPERATURE
* LOW DISK SPACE
* CONNECTION LOST
*/

function emo (message) {
  let picture = null;
  switch (message) {
    case 'ALARM:NO SOUND':
      picture = emoji.sos;
      break;
    case 'ALARM: NO SOUND':
      picture = emoji.sos;
      break;
    case 'NO SOUND':
      picture = emoji.sos;
      break;
    case 'ATTENTION: NO SOUND':
      picture = emoji.sos;
      break;
    case 'SOUND OK':
      picture = emoji.loud_sound;
      break;
    case 'HIGH TEMPERATURE':
      picture = emoji.thermometer;
      break;
    case 'CRITICAL TEMPERATURE':
      picture = emoji.fire;
      break;
    case 'LOW DISK SPACE':
      picture = emoji.floppy_disk;
      break;
    case 'LOST CONNECTION':
      picture = emoji.satellite_antenna;
      break;
    case 'CONNECTION RESTORED':
      picture = emoji.satellite;
      break;
    case 'UPTIME EXCEEDED':
      picture = emoji.hourglass_flowing_sand;
      break;
    case 'FIREWALL DISABLED':
      picture = emoji.shield;
      break;
    case 'FIREWALL ENABLED':
      picture = emoji.shield;
      break;
    case 'ACTIVATION PROBLEM':
      picture = emoji.red_circle;
      break;
    case 'ACTIVATION OK':
      picture = emoji.large_blue_circle;
      break;
    case 'DEFENDER DISABLED':
      picture = emoji.rotating_light;
      break;
    case 'DEFENDER OK':
      picture = emoji.star;
      break;
    case 'PIRA OFF':
      picture = emoji.black_circle;
      break;
    case 'PIRA ON':
      picture = emoji.white_circle;
      break;
    default:
      picture = emoji.eggplant;
  }
  return picture;
};

function format (place, time, message){
  let picture = emo(message);
  return phrase = picture + " " + place + " " + message + " " + time;
}

function formatCalendar (when, eventObject) {

  let picture = emoji.piral_calendar_pad;

  let phrase = picture;

  switch (when) {
    case "today":
    phrase = phrase + " for today";
      break;
    case "week":
    phrase = phrase + " in a week";
    break;
    case "duty":
    phrase = phrase + " on duty";
    break;
    default:
    phrase = phrase + " todo";
  }

 eventObject.forEach((item) => {

   phrase = phrase + "\n" + item.data.title;

 });

  return phrase;

}

module.exports.emo = emo;
module.exports.format = format;
module.exports.formatCalendar = formatCalendar;
