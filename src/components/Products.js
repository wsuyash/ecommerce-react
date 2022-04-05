import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../features/products/productsSlice";
import Product from "./Product";

const Products = () => {
  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  const getProducts = async () => {
    const response = await fetch('https://my-json-server.typicode.com/wsuyash/fake-db/products');
    const data = await response.json();

    dispatch(setProducts(data));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ul className="Products my-8 px-4">
      { products && products.map((product, index) => (
	<Product product={product} key={index} />
      )) }
    </ul>
  );
}

export default Products;
