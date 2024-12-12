import mongoose from "mongoose";

export const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true, // Use new MongoDB connection string parser
      useUnifiedTopology: true, // Use the new topology engine
    });
    console.log("DB connected successfully");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1); // Exit the application if the DB connection fails
  }
};
