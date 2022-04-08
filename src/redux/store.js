import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
	key: "root",
	version: 1,
	storage
};

const reducers = combineReducers({
	products: productsReducer,
	cart: cartReducer
});

const persistReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistReducers
});
