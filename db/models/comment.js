const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
  id: Number,
  author: { type: String, default: "unknown" },
  date: { type: Date, default: Date.now },
  fileName: String,
  comments: number
}) 

module.exports = mongoose.model('Article', articleSchema)