import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: any[];
  totalQuantity: number;
}

// The reducer's job is to take the state and the action and return a brand new state that reflects the changes described by the action.

const initialState: CartState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<any>) {  // instead of any here in type it should be product
      // state is initial value
      // action is what needs to be preformed, what happened in application
      state.items.push(action.payload);
      state.totalQuantity++;
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;

// directly modifies state (e.g., state.items.push(...)), 
// but internally, Redux Toolkit uses a library called Immer to ensure that the state remains immutable (meaning a new state object is created with the changes, rather than altering the original).

// action object will have a payload property,

// In simple terms: The state is "what the data currently looks like,"
// action is "what just occurred and what data is involved."