import mongoose, { Schema, Document } from 'mongoose';

// 1. Define the Interface for TypeScript
export interface IProduct extends Document {
  name: string;
  slug: string; // URL-friendly name (e.g., "blue-denim-jacket")
  description: string;
  price: number;
  category: string;
  brand: string;
  countInStock: number;
  rating: number;
  numReviews: number;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

// 2. Define the Schema
const productSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true }, 
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    category: { type: String, required: true, index: true },
    brand: { type: String, required: true },
    countInStock: { type: Number, required: true, default: 0 },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    images: [{ type: String }], // Array of image URLs
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

// 3. Create Indexes for Search Optimization
// This allows for text searches across name and description
productSchema.index({ name: 'text', description: 'text' });

const Product = mongoose.model<IProduct>('Product', productSchema);
export default Product;