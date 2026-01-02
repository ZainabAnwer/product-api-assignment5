import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("MONGO_URI =>", process.env.MONGO_URI);

    const conn = await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "productsdb", // force database name
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);

    // Safe way to get database name (TypeScript khush rahega)
    const dbName = conn.connection.db?.databaseName || "productsdb";
    console.log(`Database: ${dbName} ✅`);

  } catch (error: any) {
    console.error("DB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;