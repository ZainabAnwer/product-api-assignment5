import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import productRoutes from "./routes/productRoutes";
import errorHandler from "./middlewares/errorHandler";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// Error handler
app.use(errorHandler);

// Start server AFTER DB connection
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB(); // 👈 important
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server start failed");
  }
};

startServer();
