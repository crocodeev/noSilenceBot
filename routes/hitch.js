const rbCheckMessageHandler = require('../custoModules/rbCheckMessageHandler');

const bot = require('../telegram/bot');
const settings = require('../settings');

const {Router} = require('express');
const router = Router();

router.get('/temass/', (req,res) => {
res.sendStatus(200);

let message = req.query.remote;
bot.sendMessage(settings.temassChatID, message);

})

router.post('/temass/', (req,res) => {
  res.send("sended to test");

  let message = rbCheckMessageHandler(req.body);

  bot.sendMessage(settings.temassChatID, message);
})

module.exports = router;
