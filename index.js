//addition

const messageHandler = require('./custoModules/messageHandler');

//module for work with buffer body

//const fileUpload = require('express-fileupload');

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

app.listen(3000, () => {
  console.log("server start on 3000 port!");
});

//app.use(fileUpload());

//get

app.get('/nosilence/spb/', (req,res) => {
  res.send("sended to spb chat");
  let message = messageHandler.format(req.query.name, req.query.date, req.query.music);
  bot.sendMessage(settings.spbChatID, message);
  bot.sendMessage(settings.hitchChatID, message);
})


app.get('/nosilence/msk/', (req,res) => {
  res.send("sended to msk chat");
  let message = messageHandler.format(req.query.name, req.query.date, req.query.music);
  bot.sendMessage(settings.mskChatID, message);
  bot.sendMessage(settings.hitchChatID, message);
})

app.get('/nosilence/test/', (req,res) => {
  res.send("sended to test");

  let message = messageHandler.format(req.query.name, req.query.date, req.query.music);
  bot.sendMessage(settings.testChatID, message);
})

//post

app.post('/nosilence/screenshot/', upload.single('screenshot'), (req,res) => {

  let message = messageHandler.format(req.body.where, req.body.when, req.body.what);

  let screenshot = req.file.buffer;

  bot.sendPhoto(settings.testChatID, screenshot, {caption: message});

	res.send("sended");
})

app.post('/nosilence/screenshotSPB/', upload.single('screenshot'), (req,res) => {

  let message = messageHandler.format(req.body.where, req.body.when, req.body.what);

  let screenshot = req.file.buffer;

  bot.sendPhoto(settings.spbChatID, screenshot, {caption: message});

	res.send("sended");
})

app.post('/nosilence/screenshotMSK/', upload.single('screenshot'), (req,res) => {

  let message = messageHandler.format(req.body.where, req.body.when, req.body.what);

  let screenshot = req.file.buffer;

  bot.sendPhoto(settings.mskChatID, screenshot, {caption: message});

	res.send("sended");
})


/*bot.on('message', (msg) =>{
  console.log(msg.chat.id);
});*/
