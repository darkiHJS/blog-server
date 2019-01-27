const fs      = require('fs')
const { addArticle, getArticleList, getArticle, deleteArticle} = require('../service/article.service')
const marked  = require('marked')
var get_articleList = async (ctx, next) => {
  await next()
  ctx.response.body = await getArticleList()
}

var get_article = async (ctx, next) => {
  // var path = './article/article.list.json'
  // await new Promise((resolve, reject) => {
  //   fs.readFile(path, function(err, data) {
  //     if(err) ctx.throw(err)
  //     resolve(data)
  //   })
  // }).then(function(data){
  //   ctx.response.body = (JSON.parse(data.toString())).articleList[1].comment[1].name
  // })
  await next()
  ctx.response.body = marked(await getArticle())
}

var post_article = async (ctx, next) => {
  
}
var del_article = async (ctx, next) => {
  ctx.body = deleteArticle(ctx.query._id)
}
module.exports = {
  'GET /article'    : get_articleList,
  'GET /article/:id': get_article,
  'POST /article'   : post_article,
  'DELETE /article' : del_article
}