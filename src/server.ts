// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import router from "./routers";
// import cors from "cors";


// dotenv.config();

// let mongoURI = process.env.MONGO_URI || "";
// let PORT = process.env.PORT || 5555;

// const app = express();

// async function connectoMongoDB(connectionString: string) {
//   await mongoose.connect(connectionString);
//   console.log("Connected to MongoDB");
// }

// try {
//   connectoMongoDB(mongoURI);
// } catch (err) {
//   console.log("Failed to connect to MongoDB", err);
// }


// app.use(
//   cors({
//     origin: "*", // tạm thời cho tất cả
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   })
// );

// app.use(express.json()); 
// app.use(express.urlencoded({ extended: true })); 

// app.use("/", router);

// app.listen(PORT, () =>
//   console.log(`Server running on port http://localhost:${PORT}`),
// );

import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";

dotenv.config();

const mongoURI = process.env.MONGO_URI || "";
const PORT = process.env.PORT || 5555;

async function connectMongoDB() {
  await mongoose.connect(mongoURI);
  console.log("Connected to MongoDB");
}

connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

