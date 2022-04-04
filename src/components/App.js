import Navbar from "./Navbar";
import Products from "./Products";

const App = () => {
  return (
    <div className="App p-2 border-2 border-red-500">
			<h1 className="text-3xl font-bold">This is App.</h1>
			<Navbar />
			<Products />
    </div>
  );
}

export default App;
