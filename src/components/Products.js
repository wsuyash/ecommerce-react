import Product from "./Product";

const Products = () => {
  return (
    <div className="Products p-2 border-2 border-green-500">
			<h1 className="text-3xl font-bold">This is Products.  <button>Sort By Price</button> </h1>
			<Product />
    </div>
  );
}

export default Products;
