import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
	const items = useSelector((state) => state.cart.items);

	return (
		<div className="Navbar flex justify-between items-center p-6">
			<div className="nav-left flex justify-between items-center gap-4 ">
				<div className="w-16 h-16">
					<Link to="/"><img src="/images/logo.png" alt="logo" /></Link>
				</div>
				<Link className="text-blue-400 font-bold hover:text-blue-500" to="/">Products</Link>
				<Link className="text-blue-400 font-bold hover:text-blue-500" to="/add">Add A Product</Link>
			</div>
			<div className="nav-right">
				<Link to="/cart">
					<div className="relative">
						<img src="/images/cart.png" alt="cart" className="w-8 h-8" />
						<div className="w-5 h-5 flex justify-center items-center absolute -top-2 -right-3 text-white text-sm font-bold bg-red-500 rounded-full">{items.length}</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
