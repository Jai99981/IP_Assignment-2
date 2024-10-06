import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect('mongodb+srv://meghks:sR6sEYZQgQxYATgc@cluster0.lhng6.mongodb.net/Book_Recomendation?retryWrites=true&w=majority&appName=Cluster0')
      .then(() => {
        console.log('Successfully connected to MongoDB');
      })
      .catch((err) => {
        console.error('Connection error', err);
      });
  } catch (err) {
    console.error('Connection error', err);
    process.exit(1);
  }
}

export default connectDB;