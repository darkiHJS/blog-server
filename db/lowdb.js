const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')
const path = require('path')

const abapter = new FileAsync(path.resolve('data/db.json'))

const db = low(abapter)

module.exports = db