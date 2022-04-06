import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    updateProduct: (state, action) => {
      if (action.payload.rating > 5) {
	action.payload.rating = 5;
      }
      if (action.payload.rating < 0) {
	action.payload.rating = 0;
      }
      const index = state.allProducts.findIndex((product) => product.id === parseInt(action.payload.id));
      state.allProducts[index] = action.payload;
    },
    deleteProduct: (state, action) => {
      const index = state.allProducts.findIndex((product) => product.id === parseInt(action.payload));
      state.allProducts.splice(index, 1);
    },
  }
});

export const { setProducts, updateProduct, deleteProduct } = productsSlice.actions; 

export default productsSlice.reducer;
