import express from "express";
import morgan from "morgan";
import paymentRoutes from "../routes/payment.routes.js";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/payment", paymentRoutes);

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

export default app;
