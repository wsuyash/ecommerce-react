import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <div className="AddProduct w-1/4 h-min m-auto absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center gap-8">
      <h1 className="text-3xl text-blue-500 font-bold self-start">Add A Product</h1>
      <form className="w-full flex flex-col justify-center items-center gap-4">
	<input className="w-full p-2 border-2 border-gray-500" type="text" placeholder="Name" />
	<input className="w-full p-2 border-2 border-gray-500" type="text" placeholder="Description" />
	<input className="w-full p-2 border-2 border-gray-500" min="0" type="number" placeholder="Price" />
	<input className="w-full p-2 border-2 border-gray-500" type="number" min="0" max="5" placeholder="Rating" />
	<div className="w-1/2 flex flex-row justify-between items-center">
	  <button className="w-20 px-4 py-2 bg-green-500 text-white hover:bg-green-600" type="submit">Add</button>
	  <Link to="/" ><button className="w-20 px-4 py-2 bg-red-500 text-white hover:bg-red-600">Cancel</button></Link>
	</div>
      </form>
    </div>
  );
}

export default AddProduct;
