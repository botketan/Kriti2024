import './App.css';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import { useEffect } from 'react';
function App() {
  useEffect (() => {
    document.title = "Kriti2024";
  }, []);
  return (
      <div>
         <Navbar/>
         <Home/>
      </div>
       
  );
}

export default App;
