import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	allProducts: [],
	product: {},
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
		setProduct: (state, action) => {
			state.product = action.payload;
		},
		addProduct: (state, action) => {
			action.payload = { id: state.allProducts.length + 1, ...action.payload }
			state.allProducts = [action.payload, ...state.allProducts]
		},
		sortProducts: (state) => {
			state.allProducts.sort((p1, p2) => p1.price - p2.price);
		},
		removeSort: (state) => {
			state.allProducts.sort((p1, p2) => p1.id - p2.id);
		}
	}
});

export const { setProducts, updateProduct, deleteProduct, setProduct, addProduct, sortProducts, removeSort } = productsSlice.actions;

export default productsSlice.reducer;
