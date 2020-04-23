

//server


const express = require('express');
const app = express();

app.use('/nosilence', require('./routes/inplayrouter.js'));

app.use('/', require('./routes/hitch_router.js'))


app.listen(3000, () => {
  console.log("server start on 3000 port!");
});
