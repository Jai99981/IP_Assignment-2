import BookModel from "./model/BookModel.js";
import connectDB from "./database/db_connection.js";

connectDB();

BookModel.find()
    .then(result => {
        console.log('Books:', result);
    })
    .catch(err => {
        console.error('Error fetching books:', err);
    });

// console.log(result)