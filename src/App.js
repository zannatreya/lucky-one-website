import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shoe from './Components/Shoe/Shoe';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Shoe></Shoe>
      <div className='card-container'>
        <div className='card'>
          <h1>How react works?</h1>

        </div>
        <div className='card'>
          <h1>How react works?</h1>

        </div>
      </div>
    </div>
  );
}

export default App;
