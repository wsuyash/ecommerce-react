import Product from "./Product";

const Products = (props) => {
	const { products, handleSort, handleRemoveSort, sort } = props;

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
