import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProduct, deleteProduct } from "../features/products/productsSlice";
import { addToCart } from "../features/cart/cartSlice";

const Product = (props) => {
	const { from } = props;
	const dispatch = useDispatch();
	const { product } = props;
	const [edit, setEdit] = useState(() => false);
	const [name, setName] = useState(() => "");
	const [price, setPrice] = useState(() => 0);
	const [rating, setRating] = useState(() => 0);
	const [description, setDescription] = useState(() => "");

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


	const onEdit = () => {
		setName(() => product.name);
		setPrice(() => product.price);
		setRating(() => product.rating);
		setDescription(() => product.description);
		setEdit((prev) => !prev);
	}

	const handleSave = async (e) => {
		if (!name || !price || !rating || !description) {
			return;
		}

		const id = parseInt(e.target.id);
		const response = await fetch(`/wsuyash/fake-db/products/${id}`, {
			method: 'PUT',
			body: JSON.stringify({
				id,
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
		dispatch(updateProduct(data));
		setEdit((prev) => !prev);
	}

	const handleDelete = async (e) => {
		const id = parseInt(e.target.id);
		await fetch(`/wsuyash/fake-db/products/${id}`, {
			method: 'DELETE'
		});

		dispatch(deleteProduct(id));
	}

	const handleAddToCart = () => {
		dispatch(addToCart(product));
	}

	return (
		<li className="Product flex justify-between my-2 p-4 border-2 border-blue-500">
			<div className="product-left flex flex-col justify-evenly items-start gap-4 grow">
				{edit ? (
					<div>
						<input className="block p-2 border-2 border-gray-500" type="text" placeholder="Name" value={name} onChange={(e) => setName(() => e.target.value)} required />
						<br />
						<input className="block p-2 border-2 border-gray-500" type="number" placeholder="Price" min="0" value={price} onChange={(e) => setPrice(() => e.target.value)} required />
					</div>
				) : (
					<div>
						<Link to={"/products/" + product.id}><p className="font-bold hover:text-blue-500">{product.name}</p></Link>
						<p className="text-gray-500">₹{product.price}</p>
					</div>
				)}
				{edit ? (
					<input className="block p-2 border-2 border-gray-500" type="number" min="0" max="5" placeholder="Rating" value={rating} onChange={(e) => setRating(() => e.target.value)} required />
				) : (
					<p>{stars}</p>
				)}
			</div>
			<div className="product-right w-1/2 flex flex-col justify-between items-end gap-2">
				{edit ? (
					<textarea className="block p-2 border-2 border-gray-500" name="description" id="description" value={description} onChange={(e) => setDescription(() => e.target.value)} cols="30" rows="10" required></textarea>
				) : (
					<p className="max-h-60 text-gray-700 break-words overflow-y-scroll no-scrollbar">{product.description}</p>
				)}
				<div className="flex justify-end items-center gap-4">
					{edit ? (
						<>
							<button className="px-2 py-1 bg-gray-500 text-white hover:bg-gray-700" onClick={() => setEdit((prev) => !prev)}>Cancel</button>
							<button className="px-2 py-1 bg-green-500 text-white hover:bg-green-600" id={product.id} onClick={handleSave}>Save</button>
						</>
					) : (
						<>
							{from === "cart" ? (null) : (
								<>
									<button onClick={handleAddToCart}><i className='fa-solid fa-cart-plus text-xl text-green-500'></i></button>
									<button onClick={onEdit}><i className='fa-solid fa-edit text-xl text-blue-500'></i></button>
									<i className='fa-solid fa-trash text-xl text-red-500 hover:cursor-pointer' id={product.id} onClick={handleDelete}></i>
								</>
							)}
						</>
					)}
				</div>
			</div>
		</li>
	);
}

export default Product;
