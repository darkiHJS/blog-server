const articleModel  = require('../db/models/article')
const fs            = require('fs')
module.exports = {
  getArticleList: async (currentPageIndex) => {
    // 返回 article 文章列表
    const article = articleModel
    let articlelist = ''
    await article.find({}, function( err, article ) {
      if(err) return this.throw(err)
      articlelist = article
    })
    return articlelist
  },
  getArticle: async (articleId) => {
    var text
    return new Promise(function(resolve, reject) {
      fs.readFile('./data/article/atc_01.md',{encoding: 'utf-8'}, function(err, data){
        if(err) return reject(err)
        resolve(data)
      })
    })
  },
  addArticle: async (data) => {
    console.log(data)
    const article = new articleModel(data)
    await article.save()
    return 0
  },
  modifyArticle: async (articleId, modifyTepy, data) => {
    // 修改 article 文章
  },
  deleteArticle: async (articleId) => {
    articleModel.remove({_id:articleId},err => {
      if(err) return -1
      return 0
    })
  }
} 