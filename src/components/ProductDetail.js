import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../features/cart/cartSlice";
import { setProduct } from "../features/products/productsSlice";

const ProductDetail = () => {
	const { productId } = useParams();
	const product = useSelector((state) => state.products.product);
	const cartItems = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();
	const [inCart, setInCart] = useState(() => false);

	let stars = [];
	const createStars = () => {
		for (let i = 0; i < product.rating; i++) {
			stars.push(<i className='fa-solid fa-star text-yellow-500' key={i}></i>);
		}
		for (let i = product.rating; i < 5; i++) {
			stars.push(<i className='fa-solid fa-star text-gray-300' key={i}></i>);
		}
	}
	createStars();

	useEffect(() => {
		const getProduct = async () => {
			try {
				const response = await fetch(`https://my-json-server.typicode.com/wsuyash/fake-db/products/${productId}`);	
				const data = await response.json();

				dispatch(setProduct(data));

			} catch (error) {
				toast.error(error.message);
			}
		}
		getProduct();
	}, [dispatch, productId]);

	useEffect(() => {
		if (cartItems.findIndex((p) => p.id === parseInt(productId)) !== -1 ) {
			setInCart(() => true);
		}
	}, [cartItems, productId]);


	const handleAddToCart = () => {
		setInCart(() => true);
		dispatch(addToCart(product));
		toast.success('Product Added to Cart.');
	}

	return (
		<div className="ProductDetail w-1/4 h-min p-2 flex flex-col justify-start items-center gap-4 absolute top-0 bottom-0 right-0 left-0 m-auto">
			<h1 className="text-3xl font-bold">{product.name}</h1>
			<p className="max-h-80 break-words overflow-y-scroll no-scrollbar">{product.description}</p>
			<p className="text-gray-700">₹{product.price}</p>
			<p>{stars}</p>
			{inCart ? (null) : (
				<button className="px-2 py-1 text-white bg-green-500 hover:bg-green-700" onClick={handleAddToCart}><i className='fa-solid fa-cart-plus'></i> Add To Cart</button>
			)}
		</div>
	);
}

export default ProductDetail;
