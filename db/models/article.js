const mongoose = require('mongoose')

let articleSchema = new mongoose.Schema({
  title: String,
  isPublish: { type: Boolean, default: false },
  author: { type: String, default: "Darki" },
  date: Number,
  articleContent: String,
  tag:[{type:String}],
  comments: Number 
}) 

module.exports = mongoose.model('Article', articleSchema)