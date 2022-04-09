import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSort, setProducts, sortProducts } from "../features/products/productsSlice";
import { toast } from "react-toastify";
import Product from "./Product";

const Products = () => {
	const products = useSelector((state) => state.products.allProducts);
	const dispatch = useDispatch();
	const [sort, setSort] = useState(() => false);

	useEffect(() => {
		if (products.length < 1) {
			const getProducts = async () => {
				try {
					const response = await fetch('https://my-json-server.typicode.com/wsuyash/fake-db/products');
					const data = await response.json();

					dispatch(setProducts(data));
				} catch (error) {
					toast.error(error.message);
				}
			}

			getProducts();
		}
	}, [dispatch, products.length]);

	const handleSort = () => {
		setSort(() => true)
		dispatch(sortProducts());
	}

	const handleRemoveSort = () => {
		setSort(() => false)
		dispatch(removeSort());
	}

	return (
		<>
			<div className="px-4 text-right">
				<button className="px-2 py-1 border-2 border-gray-500 rounded hover:text-white hover:bg-gray-500" onClick={handleSort}>Sort by Price </button>
				{ sort ? (
					<i className="fa-solid fa-circle-xmark ml-2 text-xl text-red-500 hover:cursor-pointer hover:text-red-700" onClick={handleRemoveSort}></i>
				) : (null) }
			</div>
			<ul className="Products my-8 md:px-4">
				{products.map((product, index) => (
					<Product product={product} key={index} />
				))}
			</ul>
		</>
	);
}

export default Products;
