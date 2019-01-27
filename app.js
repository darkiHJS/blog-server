'use strict';

const Koa         = require('koa');
const cors        = require('koa2-cors');
const bodyParser  = require('koa-bodyparser');
const routers     = require('./router');
const mongoose    = require('mongoose');
const dbConfig    = require('./db/config');

const app         = new Koa();

app.use(async (req,next) => {
  mongoose.connect(dbConfig.blog, {
    useNewUrlParser: true
  })
  await next()
})
app.use(cors({origin: 'http://localhost:8080',})) // 跨域
app.use(bodyParser()); // 解析request的body

app.use(routers());

app.listen(7001)