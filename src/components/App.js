import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Products from "./Products";
import AddProduct from "./AddProduct";
import Cart from "./Cart";

const App = () => {
  return (
    <div className="App p-2">
      <Navbar />
      <Routes>
	<Route path="/" element={<Products />} />
	<Route path="add" element={<AddProduct />} />
	<Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
