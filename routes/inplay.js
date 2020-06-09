const messageHandler = require('../custoModules/messageHandler');
const settings = require('../settings');
const bot = require('../telegram/bot');

//module for work with buffer body

const multer = require('multer');

const upload = multer();

const {Router} = require('express');
const router = Router();

router.get('/spb/', (req,res) => {
  res.send("sended to spb chat");
  let message = messageHandler.format(req.query.name, req.query.date, req.query.music);
  bot.sendMessage(settings.spbChatID, message);
  //bot.sendMessage(settings.hitchChatID, message);
})

router.get('/msk/', (req,res) => {
  res.send("sended to msk chat");
  let message = messageHandler.format(req.query.name, req.query.date, req.query.music);
  bot.sendMessage(settings.mskChatID, message);
  //bot.sendMessage(settings.hitchChatID, message);
})

router.get('/test/', (req,res) => {
  res.send("sended to test");

  let message = messageHandler.format(req.query.name, req.query.date, req.query.music);
  bot.sendMessage(settings.testChatID, message);
})

//post

router.post('/test/', (req,res) => {
  res.send("sended to test");

  console.log(req.body);

  let message = req.body.test;
  bot.sendMessage(settings.testChatID, message);
})

router.post('/screenshot/', upload.single('screenshot'), (req,res) => {

  let message = messageHandler.format(req.body.where, req.body.when, req.body.what);

  let screenshot = req.file.buffer;

  bot.sendPhoto(settings.testChatID, screenshot, {caption: message});

	res.send("sended");
})

router.post('/screenshotSPB/', upload.single('screenshot'), (req,res) => {

  let message = messageHandler.format(req.body.where, req.body.when, req.body.what);

  let screenshot = req.file.buffer;

  bot.sendPhoto(settings.spbChatID, screenshot, {caption: message});

	res.send("sended");
})

router.post('/screenshotMSK/', upload.single('screenshot'), (req,res) => {

  let message = messageHandler.format(req.body.where, req.body.when, req.body.what);

  let screenshot = req.file.buffer;

  bot.sendPhoto(settings.mskChatID, screenshot, {caption: message});

	res.send("sended");
})



module.exports = router;
