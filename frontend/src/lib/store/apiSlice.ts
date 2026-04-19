import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Instead of a standard slice, we use createApi. This will automatically generate a hook for us called useGetProductsQuery
export const productApi = createApi({
  reducerPath: 'productApi', // Unique key for the store
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  endpoints: (builder) => ({
    getProducts: builder.query<any[], void>({
      query: () => '/products',
    }),
  }),
});

// RTKQ automatically generates this hook based on the name 'getProducts'
export const { useGetProductsQuery } = productApi;