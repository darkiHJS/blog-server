const db = require('../db/lowdb')

const fn_goodsIndex =async function(ctx, next) {
  let data = await db.then(db => db.get('cat').value())
  await next()
  if (data) ctx.body = { code: 0 , data}
  else ctx.body = {code: -1}
}

const fn_goods =async function(ctx, next) {
  await next()
  let data = await db.then(db =>{
    return db.get('goodsArr.' + ctx.params.id).value()
  })
  if(data) {
    ctx.body = {
      code: 0,
      data
    }
  }else {
    ctx.body = {
      code: -1
    } 
  } 
}

module.exports = {
  'GET /goods' : fn_goodsIndex,
  'GET /goods/:id' : fn_goods
}