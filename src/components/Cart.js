import { useSelector } from "react-redux";
import Product from "./Product";

const Cart = () => {
	const items = useSelector((state) => state.cart.items);

	return (
		<ul className="Cart p-2">
			{ items.length < 1 ? (
				<h1 className="font-bold text-center">No items in the cart.</h1>
			): (null)}
			{items.map((item, index) => (
				<Product product={item} key={index} from="cart" />
			))}
		</ul>
	);
}

export default Cart;
