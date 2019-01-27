const mongoose = require('mongoose')

let articleSchema = new mongoose.Schema({
  title: String,
  isPublish: { type: Boolean, default: false },
  richContent: String,
  author: { type: String, default: "Darki" },
  date: { type: Number, default: Date.now },
  fileName: String,
  comments: Number 
}) 

module.exports = mongoose.model('Article', articleSchema)