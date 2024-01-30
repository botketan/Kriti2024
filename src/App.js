import './App.css';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './Components/Registration.js';
import SecondPage from './Components/SecondPage.js';
function App() {
  useEffect (() => {
    document.title = "Kriti2024";
  }, []);
  return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path = "/:num/:name" element={<Registration />} /> 
            <Route path = '/home' element={<SecondPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
       
  );
}

export default App;
