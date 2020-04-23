
//module for work with buffer body

const multer = require('multer');

const upload = multer();

//bot

const settings = require('./settings');

const token = settings.token;
const botOptions = {
  polling: true,
  request: {
    proxy:"http://localhost:8118"
  }
};

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(token, botOptions);

//server


const express = require('express');
const app = express();

app.use('/nosilence', require('./routes/router.js'));

// for hitch "http://sound.inplay.space/temass/?remote={$remote}"

app.get('/temass/', (req,res) => {
res.sendStatus(200);

let message = req.query.remote;
bot.sendMessage(settings.temassChatID, message);

})


app.listen(3000, () => {
  console.log("server start on 3000 port!");
});
