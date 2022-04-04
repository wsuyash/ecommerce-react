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

  console.log(products);

  return (
    <div className="Products p-2 border-2 border-green-500">
      <Product />
    </div>
  );
}

export default Products;
