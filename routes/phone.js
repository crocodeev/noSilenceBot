const messageHandler = require('../custoModules/messageHandler');
const settings = require('../settings');
const bot = require('../telegram/bot');


const {Router} = require('express');
const router = Router();

router.get('/spb/', (req,res) => {
  res.send("sended to spb chat");
  console.log(req.query.phone);
  //let message = messageHandler.format(req.query.name, req.query.date, req.query.music);
  //bot.sendMessage(settings.spbChatID, message);
  //bot.sendMessage(settings.hitchChatID, message);
})

router.get('/msk/', (req,res) => {
  res.send("sended to msk chat");
  let message = messageHandler.format(req.query.name, req.query.date, req.query.music);
  bot.sendMessage(settings.mskChatID, message);
  //bot.sendMessage(settings.hitchChatID, message);
})

router.post('/spb/', (req,res) => {
  res.send("sended to spb chat");
  console.log(message.body);
  //let message = messageHandler.format(req.query.name, req.query.date, req.query.music);
  //bot.sendMessage(settings.spbChatID, message);
  //bot.sendMessage(settings.hitchChatID, message);
})

router.get('/msk/', (req,res) => {
  res.send("sended to msk chat");
  let message = messageHandler.format(req.query.name, req.query.date, req.query.music);
  bot.sendMessage(settings.mskChatID, message);
  //bot.sendMessage(settings.hitchChatID, message);
})



module.exports = router;
