const rbCheck = require('../custoModules/rbCheckMessageHandler');

const bot = require('../telegram/bot');
const settings = require('../settings');


//module for work with buffer body

const multer = require('multer');
const upload = multer();


const {Router} = require('express');
const router = Router();

router.get('/temass/', (req,res) => {
res.sendStatus(200);

let message = req.query.remote;
bot.sendMessage(settings.temassChatID, message);

})

router.post('/temass/', (req,res) => {
  res.send("sended to hitch");

  let message = rbCheck.messageHandler(req.body);
  bot.sendMessage(settings.temassChatID, message);

})

router.post('/temass/report/',  upload.single('report'), (req,res) => {
  res.send("sended to hitch");

  let file = req.file.buffer;
  bot.sendDocument(settings.testChatID, file);

})

module.exports = router;
