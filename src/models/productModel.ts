import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String
    },
    price: {
      type: Number,
      required: true,
      min: [1, "Price must be greater than 0"]
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "Quantity cannot be negative"]
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true // ✅ createdAt & updatedAt automatically
  }
);

export default mongoose.model("Product", productSchema);
