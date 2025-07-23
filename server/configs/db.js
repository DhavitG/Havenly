import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("Connected to db"));
    await mongoose.connect(`${process.env.MONGODB_URI}/Havenly`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
