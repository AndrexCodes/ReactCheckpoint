import logo from './logo.svg';
import './App.css';
import "./index.css"
import Products from "./products"
import ProductCard from "./components/ProductCart"

function App() {
  return (
    <div className="App">
      <p className='text-4xl p-5'>Mustafast Store</p>
      <div className='grid grid-cols-3 gap-2 px-5'>
        {Products.map(item => <ProductCard {...item} />)}
      </div>
    </div>
  )
}

export default App;
