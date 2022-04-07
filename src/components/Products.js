import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../features/products/productsSlice";
import Product from "./Product";

const Products = () => {
	const products = useSelector((state) => state.products.allProducts);
	const dispatch = useDispatch();

	useEffect(() => {
		if (products.length < 1) {
			const getProducts = async () => {
				try {
					const response = await fetch('https://my-json-server.typicode.com/wsuyash/fake-db/products');
					const data = await response.json();

					dispatch(setProducts(data));
				} catch (error) {
					console.log(error.message);
				}
			}

			getProducts();
		}
	}, [dispatch, products.length]);

	const handleSort = () => {
	}

	return (
		<>
			<div className="px-4 text-right">
				<button className="px-2 py-1 border-2 border-gray-500 rounded hover:text-white hover:bg-gray-500" onClick={handleSort}>Sort by Price </button>
				<i className="hidden fa-solid fa-circle-xmark ml-2 text-xl text-red-500 hover:cursor-pointer hover:text-red-700"></i>
			</div>
			<ul className="Products my-8 px-4">
				{products.map((product, index) => (
					<Product product={product} key={index} />
				))}
			</ul>
		</>
	);
}

export default Products;
