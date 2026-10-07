import express from "express";
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 3009;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Todo List API!");
});

app.get("/about", (req, res) => {
  res.send("About Us");
});


export default app;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
