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
				<Route path="/" element={<Products />} />
				<Route path="/add" element={<AddProduct />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/products/:productId" element={<ProductDetail />} />
			</Routes>
			<ToastContainer autoClose={500} position="top-center" theme="dark" />
		</div>
	);
}

export default App;
