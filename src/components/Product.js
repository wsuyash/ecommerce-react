import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../features/products/productsSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  const { product } = props;
  const [edit, setEdit] = useState(() => false);
  const [name, setName] = useState(() => "");
  const [price, setPrice] = useState(() => 0);
  const [rating, setRating] = useState(() => "");
  const [description, setDescription] = useState(() => "");

  const stars = [];
  for (let i = 0; i < product.rating; i++) {
    stars.push(<i className='fa-solid fa-star text-yellow-500' key={i}></i>);
  }
  for (let i = product.rating; i < 5; i++) {
    stars.push(<i className='fa-solid fa-star text-gray-300' key={i}></i>);
  }

  const onEdit = () => {
    setName(() => product.name);
    setPrice(() => product.price);
    setRating(() => product.rating);
    setDescription(() => product.description);
    setEdit((prev) => !prev);
  }

  const handleSave = async (e) => {
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

  return (
    <li className="Product flex justify-between my-2 p-4 border-2 border-blue-500">
      <div className="product-left flex flex-col justify-evenly items-start gap-4 grow">
	  { edit ? (
	    <div>
	        <input className="block p-2 border-2 border-gray-500" type="text" placeholder="Name" value={name} onChange={(e) => setName(() => e.target.value) } />
		<br />
		<input className="block p-2 border-2 border-gray-500" type="number" placeholder="Price" value={price} onChange={(e) => setPrice(() => e.target.value) } />
	    </div>
	  ) : (
	    <div>
	        <p className="font-bold">{product.name}</p> 
	        <p className="text-gray-500">₹{product.price}</p> 
	    </div>
	  )}
	{ edit ? (
	  <input className="block p-2 border-2 border-gray-500" type="number" min="0" max="5" placeholder="Rating" value={rating} onChange={(e) => setRating(() => e.target.value) } />
	) : (
	  <p>{stars}</p> 
	) }
      </div>
      <div className="product-right w-1/2 flex flex-col justify-between items-end">
	{ edit ? (
	  <input className="block p-2 border-2 border-gray-500" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(() => e.target.value) } />
	) : (
	  <p className="text-gray-700 break-words">{product.description}</p> 
	) }
	<div className="flex justify-end items-center gap-4">
	  { edit ? (
	    <>
	      <button className="px-2 py-1 bg-gray-500 text-white hover:bg-gray-700" onClick={() => setEdit((prev) => !prev) }>Cancel</button>
	      <button className="px-2 py-1 bg-green-500 text-white hover:bg-green-600" id={product.id} onClick={handleSave}>Save</button>
	    </>
	  ) : (
	    <>
	      <button><i className='fa-solid fa-cart-plus text-xl text-green-500'></i></button>
	      <button onClick={onEdit}><i className='fa-solid fa-edit text-xl text-blue-500'></i></button>
	      <button><i className='fa-solid fa-trash text-xl text-red-500'></i></button>
	    </>
	  ) }
	</div>
      </div>
    </li>
  );
}

export default Product;
