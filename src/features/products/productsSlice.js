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
    },
    updateProduct: (state, action) => {
      const index = state.allProducts.findIndex((product) => product.id === parseInt(action.payload.id));
      state.allProducts[index] = action.payload;
    }
  }
});

export const { setProducts, updateProduct } = productsSlice.actions; 

export default productsSlice.reducer;
