const messageHandler = require('../custoModules/messageHandler');
const rbCheck = require('../custoModules/rbCheckMessageHandler');
const settings = require('../settings');
const bot = require('../telegram/bot');

//module for work with buffer body

const multer = require('multer');

const upload = multer();

const {Router} = require('express');
const router = Router();

router.get('/g/', (req,res) => {
  res.send("sended to test");

  let message = messageHandler.format(req.query.name, req.query.date, req.query.music);
  bot.sendMessage(settings.testChatID, message);
})

//post

router.post('/p/', (req,res) => {
  res.send("sended to test");

  let message = rbCheck.messageHandler(req.body);
  console.log(message);

  bot.sendMessage(settings.testChatID, message);
})


router.post('/screenshot/', upload.single('screenshot'), (req,res) => {

  let message = messageHandler.format(req.body.where, req.body.when, req.body.what);

  let screenshot = req.file.buffer;

  bot.sendPhoto(settings.testChatID, screenshot, {caption: message});

	res.send("sended");
})

module.exports = router;
