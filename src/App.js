import './App.css';
import { BrowserRouter as Router,Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
function App() {
  return (
      <div>
         <Navbar/>
         <Home/>
      </div>
       
  );
}

export default App;
