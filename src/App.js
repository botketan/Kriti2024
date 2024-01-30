import './App.css';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './Components/Registration.js';
import SecondPage from './Components/SecondPage.js';
import LoginPage from './Components/LoginPage.js';

function App() {
  const [title, setTitle]= useState("Login");
  const [link, setLink]= useState("/login");
  useEffect (() => {
    document.title = "Kriti2024";
  }, []);
  return (
      <div>
        <BrowserRouter>
          <Navbar title={title} link={link}/>
          <Routes>
            <Route path='/' element={<Home setLink={setLink} setTitle={setTitle}/>} />
            <Route path = "/:num/:name" element={<Registration />} /> 
            <Route path = '/home' element={<SecondPage setLink={setLink} setTitle={setTitle}/>}/>
            <Route path = '/login' element={<LoginPage setLink={setLink} setTitle={setTitle}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
       
  );
}

export default App;
