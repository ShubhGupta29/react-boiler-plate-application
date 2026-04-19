import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: any[];
  totalQuantity: number;
}

const initialState: CartState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<any>) {
      state.items.push(action.payload);
      state.totalQuantity++;
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;