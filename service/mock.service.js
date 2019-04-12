/**
 * mock用的有关数据库真删改查的方法
 */
const fs = require('fs');
const path = require('path')

let getGoods = function() {
  return new Promise((res, rej) => {
    fs.readFile(path.resolve('data/goods.json'), (err, data) => {
      if(err) rej(err);
      res(data.toString())
    })
  }).then(data => data)
}
 
module.exports = {
  getGoods
} 