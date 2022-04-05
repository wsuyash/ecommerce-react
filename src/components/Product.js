const Product = (props) => {
  const { product } = props;

  const stars = [];
  for (let i = 0; i < product.rating; i++) {
    stars.push(<i className='fa-solid fa-star text-yellow-500' key={i}></i>);
  }
  for (let i = product.rating; i < 5; i++) {
    stars.push(<i className='fa-solid fa-star text-gray-300' key={i}></i>);
  }

  return (
    <li className="Product flex justify-between my-2 p-4 bg-blue-200">
      <div className="product-left flex flex-col justify-evenly items-start gap-4 grow">
	<div>
	  <p className="font-bold">{product.name}</p> 
	  <p className="text-gray-500">₹{product.price}</p> 
	</div>
	<p>{stars}</p> 
      </div>
      <div className="product-right w-1/2 flex flex-col justify-between items-end">
	<p className="text-gray-700 break-words">{product.description}</p> 
	<div className="flex justify-end items-center gap-4">
	  <button><i className='fa-solid fa-cart-plus text-xl text-green-500'></i></button>
	  <button><i className='fa-solid fa-edit text-xl text-blue-500'></i></button>
	  <button><i className='fa-solid fa-trash text-xl text-red-500'></i></button>
	</div>
      </div>
    </li>
  );
}

export default Product;
