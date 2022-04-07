import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";
import { setProduct } from "../features/products/productsSlice";

const ProductDetail = () => {
	const { productId } = useParams();
	const product = useSelector((state) => state.products.product);
	const dispatch = useDispatch();

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
			const response = await fetch(`https://my-json-server.typicode.com/wsuyash/fake-db/products/${productId}`);	
			const data = await response.json();

			dispatch(setProduct(data));
		}

		getProduct();
	}, [dispatch, productId]);

	const handleAddToCart = () => {
		dispatch(addToCart(product));
	}

	return (
		<div className="ProductDetail w-1/4 h-min py-2 flex flex-col justify-start items-center gap-2 absolute top-0 bottom-0 right-0 left-0 m-auto border-2 border-red-500">
			<h1 className="text-3xl font-bold">{product.name}</h1>
			<p>{product.description}</p>
			<p>₹{product.price}</p>
			<p>{stars}</p>
			<button className="px-2 py-1 text-white bg-green-500 hover:bg-green-700" onClick={handleAddToCart}><i className='fa-solid fa-cart-plus'></i>  Add To Cart</button>
		</div>
	);
}

export default ProductDetail;