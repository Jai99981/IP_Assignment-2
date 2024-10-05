const mongoose = require('mongoose')

 const BookSchema = new mongoose.Schema({
    Title:String,
    Author:String,
    Genres:[String],
    Image:String
 })

 const BookModel  = mongoose.model("book", BookSchema)
 
 module.exports = BookModel