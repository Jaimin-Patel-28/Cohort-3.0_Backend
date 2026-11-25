import { Router } from "express";
import productModel from "../models/product.model.js";
import razorpay from "../config/razorpay.js";
import paymentModel from "../models/payment.model.js";

const router = Router();

router.post("/:productId/order", async (req, res) => {
  const { productId } = req.params;

  const product = await productModel.findById(productId);
  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  const order = await razorpay.orders.create({
    amount: product.price.amount * 100,
    currency: product.price.currancy,
    receipt: `order_rcptid_${productId}`,
    notes: {
      productId: productId,
      productTitle: product.title,
    },
  });

  const payment = (
    await paymentModel.create({
      orderId: order.id,
      product: product._id,
      amount: product.price.amount,
      currancy: product.price.currancy,
      status: "pending",
    })
  ).toObject();

  return res.status(201).json({ ...payment, keyId: razorpay.key_id });
});

export default router;
