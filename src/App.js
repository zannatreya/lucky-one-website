import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shoe from './Components/Shoe/Shoe';
import MessengerCustomerChat from 'react-messenger-customer-chat';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Shoe></Shoe>
      <div className='card-container'>
        <div className='card'>
          <h1>How useState works?</h1>
          <div>
            <p>useState is a Hook that allows you to have state variables
              in functional components.
              You pass the initial state to this function and it returns
              a variable with the current state value
              and another function to update this value. </p>
          </div>

        </div>
        <div className='card'>
          <h1>Props vs State</h1>

          <div>
            <p><strong>Props:</strong> Props are read-only and immutable.
              Props allow you to pass data from one component to other components as an argument
              and can be accessed by the child component
              and make components reusable.</p>
            <p><strong>State:</strong> State is mutable and changes can be asynchronous.
              It cannot be accessed by child components
              and can be used for rendering dynamic changes with the component.
              It cannot make components reusable.
            </p>
          </div>

        </div>
      </div>
      <MessengerCustomerChat
    pageId="107012672117270"
    appId="586701279704824"
  />,
    </div>
  );
}

export default App;
