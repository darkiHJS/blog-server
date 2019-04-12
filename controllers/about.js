const { getGoods } = require('../service/mock.service')

var fn_test = async function(ctx, next){
  ctx.response.body = await getGoods();
  await next() 
}

module.exports = {
  'GET /about': fn_test,
}