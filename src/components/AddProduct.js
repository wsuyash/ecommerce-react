import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addProduct } from "../features/products/productsSlice";

const AddProduct = () => {
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
			toast.info('Invalid Input.');
			return;
		}

		try {
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
			toast.success('Product Added!');
			navigate("/");

		} catch (error) {
			toast.error(error.message);
		}
	}

	return (
		<div className="AddProduct w-full md:w-1/2 lg:w-1/4 m-auto p-4 md:p-0 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-10 md:mt-0 flex flex-col justify-center items-center gap-8">
			<h1 className="text-3xl text-blue-500 font-bold self-center">Add A Product</h1>
			<form className="w-full flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit}>
				<input className="w-full p-2 border-2 border-gray-500" type="text" placeholder="Name" value={name} onChange={(e) => setName(() => e.target.value)} />
				<input className="w-full p-2 border-2 border-gray-500" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(() => e.target.value)} />
				<input className="w-full p-2 border-2 border-gray-500" min="0" type="number" placeholder="Price" value={price} onChange={(e) => setPrice(() => e.target.value)} />
				<input className="w-full p-2 border-2 border-gray-500" type="number" min="0" max="5" placeholder="Rating" value={rating} onChange={(e) => setRating(() => e.target.value)} />
				<div className="w-1/2 flex flex-row justify-between items-center gap-4">
					<button className="w-20 px-4 py-2 bg-green-500 text-white hover:bg-green-600" type="submit">Add</button>
					<Link to="/"><button className="w-20 px-4 py-2 bg-red-500 text-white hover:bg-red-600">Cancel</button></Link>
				</div>
			</form>
		</div>
	);
}

export default AddProduct;
