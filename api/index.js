

import express from 'express';
import cors from "cors"
import connectDB from '../config/db.js';
// import route from './routes/todoRoutes.js';
import route from "../routes/todoRoutes.js"

await connectDB();

const app=express();
const PORT=process.env.PORT||3009;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api',route);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
