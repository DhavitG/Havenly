import express from "express";
import "dotenv/config";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

import connectDB from "./configs/db.js";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/userRoutes.js";
import hotelRouter from "./routes/hotelRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import roomRouter from "./routes/roomRoutes.js";

connectDB();
connectCloudinary();

const app = express();

// Enable cross origin resource sharing (allow any frontend to get connected with this backend )
app.use(cors());

// Middleware
app.use(clerkMiddleware());
app.use(express.json());

// API to listen Clerk Webhook
app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => {
  res.send("API is working");
});
app.use("/api/user", userRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/rooms", roomRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
