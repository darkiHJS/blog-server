const db = require('./lowdb')
const fs = require('fs')
const path = require('path')

db.then(db => {
  new Promise((res, rej) => {
    fs.readFile(path.resolve('data/goods.json'), (err, data) => {
      if (err) rej(err)
      let newGoods = {
        cat : [],
        goodsArr: {}
      }
      let goods = JSON.parse(data.toString())
      let goodsArr = goods.goodsArr
      let cat = goods.cat.content
      newGoods.cat = cat
      cat.forEach(e => {
        let goodHeader = {
          name: e.name,
          title: e.title,
          description: e.description,
          goods: []
        }
        goodsArr[e.sort].goods.forEach(e =>{
          let ne = {
            id      : e.site_goods_id,
            imgUrl  : e.img_url,
            name    : e.name,
            enName  : e.en_name,
            brief   : e.brief,
            price   : e.price,
            spec    : e.spec,
            tags    : e.tags
          }
          goodHeader.goods.push(ne)
        })
        newGoods.goodsArr[e.sort] = goodHeader
      });
      res(newGoods)
    })
  }).then((a) => {
    db.defaults(a).write()
  })
})
