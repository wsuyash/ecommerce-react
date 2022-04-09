import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Navbar";
import Products from "./Products";
import AddProduct from "./AddProduct";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";

const App = () => {
	return (
		<div className="App p-2">
			<Navbar />
			<Routes>
				<Route path="ecommerce-react" element={<Products />} />
				<Route path="ecommerce-react/add" element={<AddProduct />} />
				<Route path="ecommerce-react/cart" element={<Cart />} />
				<Route path="ecommerce-react/products/:productId" element={<ProductDetail />} />
			</Routes>
			<ToastContainer autoClose={1000} position="top-center" theme="dark" />
		</div>
	);
}

export default App;
