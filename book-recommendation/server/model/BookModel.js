import mongoose from "mongoose"

 const BookSchema = new mongoose.Schema({
    Title:String,
    Author:String,
    Genres:[String],
    Image:String
 })

 const BookModel  = mongoose.model("Book", BookSchema, 'Books')
 
export default BookModel