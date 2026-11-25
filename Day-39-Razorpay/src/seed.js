import mongoose from "mongoose";
import connectDB from "./config/db.js";
import productModel from "./models/product.model.js";

const products = [
  {
    title: "Wireless Mouse",
    description: "Ergonomic wireless mouse with adjustable DPI.",
    price: { amount: 799 },
  },
  {
    title: "Mechanical Keyboard",
    description: "Compact mechanical keyboard with tactile switches.",
    price: { amount: 2499 },
  },
  {
    title: "USB-C Hub",
    description: "Multi-port USB-C hub with HDMI and USB 3.0 ports.",
    price: { amount: 1599 },
  },
  {
    title: "Noise-Cancelling Headphones",
    description: "Over-ear headphones with active noise cancellation.",
    price: { amount: 4999 },
  },
  {
    title: "Laptop Stand",
    description: "Adjustable aluminum stand for laptops up to 16 inches.",
    price: { amount: 1299 },
  },
  {
    title: "Portable SSD",
    description: "1 TB portable solid-state drive with USB-C connectivity.",
    price: { amount: 6499 },
  },
  {
    title: "Webcam",
    description: "1080p webcam with built-in microphone and privacy cover.",
    price: { amount: 2199 },
  },
  {
    title: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with water-resistant design.",
    price: { amount: 1899 },
  },
  {
    title: "Wireless Charger",
    description: "15 W fast wireless charging pad for compatible phones.",
    price: { amount: 999 },
  },
  {
    title: "Monitor Light Bar",
    description: "Glare-free LED light bar with adjustable brightness.",
    price: { amount: 2799 },
  },
];

try {
  await connectDB();
  const insertedProducts = await productModel.insertMany(products);
  console.log(`Seeded ${insertedProducts.length} products.`);
} catch (error) {
  console.error("Failed to seed products:", error);
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}
