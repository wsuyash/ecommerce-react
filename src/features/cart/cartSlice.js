import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === parseInt(action.payload.id));
      if (index === -1) {
	state.items = [action.payload, ...state.items];
      }
    }
  }
});

export const { addToCart } = cartSlice.actions; 

export default cartSlice.reducer;
