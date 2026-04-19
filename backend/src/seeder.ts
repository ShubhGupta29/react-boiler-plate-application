import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js'; // Note the .js extension!
import connectDB from './config/db.js';    // Note the .js extension!

dotenv.config();
connectDB();

const products = [
  {
    name: 'Pro Wireless Headphones',
    slug: 'pro-wireless-headphones',
    description: 'High-quality sound with noise cancellation.',
    price: 299.99,
    category: 'Electronics',
    brand: 'AudioTech',
    countInStock: 10,
    images: ['/images/headphones.jpg'],
  },
  {
    name: 'Minimalist Leather Watch',
    slug: 'minimalist-leather-watch',
    description: 'Elegant design for every occasion.',
    price: 150.00,
    category: 'Accessories',
    brand: 'TimeKeep',
    countInStock: 5,
    images: ['/images/watch.jpg'],
  }
];

const importData = async () => {
  try {
    await Product.deleteMany(); // Clear existing products
    await Product.insertMany(products);
    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

importData();