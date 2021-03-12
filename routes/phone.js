const messageHandler = require('../custoModules/messageHandler');
const settings = require('../settings');
const bot = require('../telegram/bot');


const {Router} = require('express');
const router = Router();

router.get('/spb/', (req,res) => {
  res.send("sended to spb chat");
  let message = messageHandler.formatPhone(req.query.phone);
  bot.sendMessage(settings.spbChatID, message);
})

router.get('/msk/', (req,res) => {
  res.send("sended to msk chat");
  let message = messageHandler.formatPhone(req.query.phone);
  bot.sendMessage(settings.mskChatID, message);
})

router.post('/spb/', (req,res) => {
  res.send("sended to spb chat");
  let message = messageHandler.formatPhone(req.body.phone);
  bot.sendMessage(settings.spbChatID, message);
})

router.post('/msk/', (req,res) => {
  res.send("sended to msk chat");
  let message = messageHandler.formatPhone(req.body.phone);
  bot.sendMessage(settings.mskChatID, message);
})



module.exports = router;
