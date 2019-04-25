const db = require('../db/lowdb')

const fn_goodsIndex =async function(ctx, next) {
  let data = await db.then(db => db.get('cat').value())
  let imgBase = 'https://www.21cake.com/'
  await next()
  if (data) {
    data.forEach(e => {
      if (!/^https:/.test(e.imgUrl)) e.imgUrl = imgBase + e.imgUrl
    });
    ctx.body = { code: 0 , data}
  }else{
    ctx.body = {code: -1}
  }
}

const fn_goods =async function(ctx, next) {
  let imgBase = 'https://www.21cake.com/'
  await next()
  let data = await db.then(db =>{
    return db.get('goodsArr.' + ctx.params.id).value()
  })
  if(data) {
    data.goods.forEach(e => {
      if (!/^https:/.test(e.imgUrl)) e.imgUrl = imgBase + e.imgUrl
    });
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

const fn_goodsAll = async function(ctx, next) {
  let imgBase = 'https://www.21cake.com/'
  await next()
  let data = await db.then(db =>{
    return db.get('goodsArr').value()
  })
  if(data) {
    Object.keys(data).forEach( key => {
      data[key].goods.forEach(e => {
        if (!/^https:/.test(e.imgUrl)) e.imgUrl = imgBase + e.imgUrl
      });
    })
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
  'GET /goods/all' : fn_goodsAll,
  'GET /goods/:id' : fn_goods,
}