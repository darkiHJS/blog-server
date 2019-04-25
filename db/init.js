const db = require('./lowdb')
const fs = require('fs')
const path = require('path')

db.then(db => {
  new Promise((res, rej) => {
    fs.readFile('../data/goods.json', (err, data) => {
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
        goodsArr[e.sort].goods.forEach(food =>{
          let ne = {
            id      : food.site_goods_id,
            imgUrl  : food.img_url,
            name    : food.name,
            enName  : food.en_name,
            brief   : food.brief,
            price   : food.price,
            spec    : food.spec,
            sort    : e.sort
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
