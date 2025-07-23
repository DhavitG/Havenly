import express from "express";
import "dotenv/config";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

import connectDB from "./configs/db.js";
connectDB();

const app = express();

// Enable cross origin resource sharing (allow any frontend to get connected with this backend )
app.use(cors());

// Middleware
app.use(clerkMiddleware());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
