import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <div className="AddProduct p-2 flex flex-col justify-center items-center gap-8 border-2 border-orange-500">
      <h1 className="text-3xl font-bold">Add a Product</h1>
      <form className="flex flex-col justify-center items-center gap-2">
	<input className="p-2 border-2 border-gray-500" type="text" placeholder="Name" />
	<input className="p-2 border-2 border-gray-500" type="text" placeholder="Description" />
	<input className="p-2 border-2 border-gray-500" type="number" placeholder="Price" />
	<input className="p-2 border-2 border-gray-500" type="number" min="0" max="5" placeholder="Rating" />
	<div className="w-full flex flex-row justify-between items-center">
	  <button className="w-20 px-4 py-2 bg-green-500 text-white hover:bg-green-600" type="submit">Add</button>
	  <Link to="/" ><button className="w-20 px-4 py-2 bg-red-500 text-white hover:bg-red-600">Cancel</button></Link>
	</div>
      </form>
    </div>
  );
}

export default AddProduct;
