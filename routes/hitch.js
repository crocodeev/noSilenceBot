const bot = require('../telegram/bot');
const settings = require('../settings');

const {Router} = require('express');
const router = Router();

router.get('/temass/', (req,res) => {
res.sendStatus(200);

let message = req.query.remote;
bot.sendMessage(settings.temassChatID, message);

})

module.exports = router;
