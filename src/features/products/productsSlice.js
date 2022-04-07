import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	allProducts: [],
	product: {}
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
		getAProduct: (state, action) => {
			state.product = state.allProducts.filter((p) => p.id === parseInt(action.payload))[0];
		}
	}
});

export const { setProducts, updateProduct, deleteProduct, getAProduct } = productsSlice.actions;

export default productsSlice.reducer;
