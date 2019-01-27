var fn_test = async (ctx, next) => {
  ctx.response.body = '我爱yzl'
}

module.exports = {
  'GET /about': fn_test,
}