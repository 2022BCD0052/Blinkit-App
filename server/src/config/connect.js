import mongoose from "mongoose";

export const connectDB = async (uri) => {
  try {
    // Connect to the database
    await mongoose.connect(uri);
    console.log("DB connected successfully");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1); // Exit the application if the DB connection fails
  }
};
