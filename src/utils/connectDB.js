import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_API_KEY);
    console.log('mongoDBに接続しました');
  } catch (err) {
    console.log('mongoDBに接続できませんでした',err);
    throw new Error();
  }
};

export default connectDB;
