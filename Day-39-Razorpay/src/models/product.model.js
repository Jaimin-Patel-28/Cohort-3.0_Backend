import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    amount: {
      type: Number,
      required: true,
    },
    currancy: {
      type: String,
      default: "INR",
    },
  },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
