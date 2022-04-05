import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  sortedProducts: []
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
    },
    deleteProduct: (state, action) => {
      const index = state.allProducts.findIndex((product) => product.id === parseInt(action.payload));
      state.allProducts.splice(index, 1);
    },
    setSortedProducts: (state, action) => {
      state.sortedProducts = action.payload;
    }
  }
});

export const { setProducts, updateProduct, deleteProduct, setSortedProducts } = productsSlice.actions; 

export default productsSlice.reducer;
