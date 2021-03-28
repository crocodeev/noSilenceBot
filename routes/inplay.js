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
})

router.get('/msk/', (req,res) => {
  res.send("sended to msk chat");
  let message = messageHandler.format(req.query.name, req.query.date, req.query.music);
  bot.sendMessage(settings.mskChatID, message);
})

//post

router.post('/mediawiki/', (req, res)=>{

  let str = req.body.articleTitle;

  if( str.search(/Файл/) == 0 ){
    res.send("nothing to send");
  }else{
    let message = messageHandler.formatMediaWiki(req.body.summary, req.body.articleTitle, req.body.author);
    bot.sendMessage(settings.mskChatID, message);
    bot.sendMessage(settings.spbChatID, message);

    res.send("sended to telegram");
  }
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
