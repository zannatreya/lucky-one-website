import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Product from './Components/Product/Product';
import Shoe from './Components/Shoe/Shoe';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Product></Product>
      <Shoe></Shoe>
    </div>
  );
}

export default App;
