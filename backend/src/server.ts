import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productsRouter from "./routes/products";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);

const PORT = process.env.PORT || 5000;

app.get("/", (_req, res) => {
  res.json({
    message: "Backend работает",
  });
});

app.listen(PORT, () => {
  console.log(`Backend запущен на http://localhost:${PORT}`);
});