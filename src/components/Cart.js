import { useSelector } from "react-redux";
import Product from "./Product";

const Cart = () => {
	const items = useSelector((state) => state.cart.items);

	return (
		<ul className="Cart p-2">
			{items.map((item, index) => (
				<Product product={item} key={index} from="cart" />
			))}
		</ul>
	);
}

export default Cart;
