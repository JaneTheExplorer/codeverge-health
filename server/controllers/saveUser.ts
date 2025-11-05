import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User"; // Adjust path if needed

dotenv.config({ path: "../.env" }); // Load env variables

const saveUser = async () => {
  try {
    console.log("🔍 MONGO_URI:", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI!);

    const newUser = new User({
      name: "John Doe",
      email: "john@example.com",
    });

    await newUser.save();
    console.log("User saved to MongoDB");
    process.exit(0);
  } catch (err) {
    console.error("Error saving user:", err);
    process.exit(1);
  }
};

saveUser();
