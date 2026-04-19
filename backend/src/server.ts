import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Note the .js extension!
import productRoutes from './routes/productRoutes.js'; // Note the .js extension!

dotenv.config();
connectDB();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));