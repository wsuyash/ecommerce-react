import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addProduct } from "../features/products/productsSlice";

const AddProduct = () => {
	const products = useSelector((state) => state.products.allProducts);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [name, setName] = useState(() => "");
	const [price, setPrice] = useState(() => 0);
	const [rating, setRating] = useState(() => 0);
	const [description, setDescription] = useState(() => "");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setName(() => name);
		setPrice(() => price);
		setRating(() => rating);
		setDescription(() => description);

		if (!name || !price || !rating || !description) {
			return;
		}

		const response = await fetch("https://my-json-server.typicode.com/wsuyash/fake-db/products", {
			method: 'POST',
			body: JSON.stringify({
				name,
				description,
				price,
				rating
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});

		const data = await response.json();

		dispatch(addProduct(data));
		navigate("/");
	}

	return (
		<div className="AddProduct w-1/4 h-min m-auto absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center gap-8">
			<h1 className="text-3xl text-blue-500 font-bold self-start">Add A Product</h1>
			<form className="w-full flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit}>
				<input className="w-full p-2 border-2 border-gray-500" type="text" placeholder="Name" value={name} onChange={(e) => setName(() => e.target.value)} />
				<input className="w-full p-2 border-2 border-gray-500" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(() => e.target.value)} />
				<input className="w-full p-2 border-2 border-gray-500" min="0" type="number" placeholder="Price" value={price} onChange={(e) => setPrice(() => e.target.value)} />
				<input className="w-full p-2 border-2 border-gray-500" type="number" min="0" max="5" placeholder="Rating" value={rating} onChange={(e) => setRating(() => e.target.value)} />
				<div className="w-1/2 flex flex-row justify-between items-center">
					<button className="w-20 px-4 py-2 bg-green-500 text-white hover:bg-green-600" type="submit">Add</button>
					<Link to="/" ><button className="w-20 px-4 py-2 bg-red-500 text-white hover:bg-red-600">Cancel</button></Link>
				</div>
			</form>
		</div>
	);
}

export default AddProduct;
