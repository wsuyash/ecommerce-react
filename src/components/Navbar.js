import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar flex justify-between items-center p-4">
      <div className="nav-left flex justify-between items-center gap-4 ">
	<div className="w-16 h-16">
	  <Link to="/"><img src="/images/logo.png" alt="logo" /></Link>
	</div>
      	<Link className="text-blue-500 font-bold hover:text-blue-900" to="/">Products</Link>
      	<Link className="text-blue-500 font-bold hover:text-blue-900" to="/add">Add A Product</Link>
      </div>
      <div className="nav-right">
	<Link className="hover:text-blue-500" to="/cart">
	  <div className="relative">
	    <img src="/images/cart.png" alt="cart" width="32px" height="32px" />
	    <div className="w-5 h-5 flex justify-center items-center absolute -top-2 -right-3 text-white text-sm bg-red-500 rounded-full">0</div>
	  </div>
	</Link>
      </div> 
    </div>
  );
}

export default Navbar;
