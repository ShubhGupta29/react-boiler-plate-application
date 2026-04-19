import type { Request, Response } from 'express';
import Product from '../models/Product.js'; // Note the .js extension!

// @desc    Fetch all products
// @route   GET /api/products
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};