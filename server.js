import express from 'express';
import cors from "cors"
import todoRoutes from './routes/todo.routes.js';
import connectDB from './config/db.js';

await connectDB();

const app=express();
const PORT=process.env.PORT||3009;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api',todoRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});