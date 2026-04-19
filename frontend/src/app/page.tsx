'use client';

import { useGetProductsQuery } from '@/lib/store/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '@/lib/store/cartSlice';
import { RootState } from '@/lib/store/store';

export default function HomePage() {
  // 1. RTKQ Hook: Handles loading, error, and data automatically
  const { data: products, isLoading, error } = useGetProductsQuery();

  // 2. useSelector: Reading the cart count from our local cartSlice
  const cartCount = useSelector((state: RootState) => state.cart.totalQuantity);

  // 3. useDispatch: Getting the messenger to send actions
  const dispatch = useDispatch();

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Store (Items in Cart: {cartCount})</h1>
      
      <div className="grid grid-cols-3 gap-4 mt-6">
        {products?.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow">
            <h2 className="font-semibold">{product.name}</h2>
            <p>${product.price}</p>
            <button 
              onClick={() => dispatch(addItem(product))} // Using the dispatcher
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}