import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    }
  }
});

export const { setProducts } = productsSlice.actions; 

export default productsSlice.reducer;
