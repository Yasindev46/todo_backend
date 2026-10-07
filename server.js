import express from "express";
import cors from "cors";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import todoRoutes from "./routes/todo.routes.js";
import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3009;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", todoRoutes);

await connectDB();

export default app;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
