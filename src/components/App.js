import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Navbar";
import Products from "./Products";
import AddProduct from "./AddProduct";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { removeSort, setProducts, sortProducts } from "../features/products/productsSlice";

const App = () => {
	const products = useSelector((state) => state.products.allProducts);
	const dispatch = useDispatch();
	const [sort, setSort] = useState(() => false);


	const handleSort = () => {
		setSort(() => true)
		dispatch(sortProducts());
	}

	const handleRemoveSort = () => {
		setSort(() => false)
		dispatch(removeSort());
	}

	useEffect(() => {
		if (products.length < 1) {
			const getProducts = async () => {
				try {
					const response = await fetch('https://my-json-server.typicode.com/wsuyash/fake-db/products');
					const data = await response.json();

					dispatch(setProducts(data));
				} catch (error) {
					toast.error(error.message);
				}
			}

			getProducts();
		}
	}, [dispatch, products.length]);

	return (
		<div className="App p-2">
			<Navbar />
			<Routes>
				<Route path="/" element={<Products products={products} handleSort={handleSort} handleRemoveSort={handleRemoveSort} sort={sort} />} />
				<Route path="add" element={<AddProduct />} />
				<Route path="cart" element={<Cart />} />
				<Route path="products/:productId" element={<ProductDetail />} />
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
