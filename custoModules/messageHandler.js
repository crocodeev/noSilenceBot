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
    case 'LOW DISK SPACE':
      picture = emoji.floppy_disk;
      break;
    case 'CONNECTION LOST':
      picture = emoji.satellite;
    default:
      picture = emoji.eggplant;
  }
  return picture;
};

function format (place, time, message){
  let picture = emo(message);
  return phrase = picture + " " + place + " " + message + " " + time;
}

module.exports.emo = emo;
module.exports.format = format;
