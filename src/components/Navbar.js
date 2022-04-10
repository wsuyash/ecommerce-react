import { useSelector } from "react-redux";
import logo from "../images/logo.png";
import cart from "../images/cart.png";

const Navbar = () => {
	const items = useSelector((state) => state.cart.items);

	return (
		<div className="Navbar flex justify-center md:justify-between items-center gap-2 py-4 px-2 md:p-6">
			<div className="nav-left flex justify-between items-center gap-4">
				<div className="w-16 h-16">
					<a href="/ecommerce-react"><img src={logo} alt="logo" /></a>
				</div>
				<a href="/ecommerce-react" className="text-blue-400 font-bold hover:text-blue-500">Products</a>
				<a href="/ecommerce-react/add" className="text-blue-400 font-bold hover:text-blue-500">Add A Product</a>
			</div>
			<div className="nav-right">
				<a href="/ecommerce-react/cart">
					<div className="relative">
						<img src={cart} alt="cart" className="w-8 h-8" />
						{items.length > 0 ? (
							<div className="w-5 h-5 flex justify-center items-center absolute -top-2 -right-3 text-white text-sm font-bold bg-red-500 rounded-full">{items.length}</div>
						) : (
							null
						)}
					</div>
				</a>
			</div>
		</div>
	);
}

export default Navbar;
