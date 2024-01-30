import React, { useState } from 'react';
import './LoginStyle.css'; 
// import Navbar1 from './Navbar1.js';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
function App({setLink, setTitle}) {
  // const [option, setOption] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [Err, setErr] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate()

  const handleLogin = (e) => {
    
    e.preventDefault()
    // fetch(`http://localhost:4000/api/login`,{method:'GET'})
    // .then((data)=>{
    //   console.log(data.status)
    // })

    if (username && password) {
      console.log(`Login successful!\nUsername: ${username}\nPassword: ${password}`);
      setErrorMessage('');
    } else {
      // alert('Please fill in all fields.');
      setErrorMessage('Please fill in all fields.');
    }
    let token;
    console.log(process.env.REACT_APP_BACKEND_URL)
    Axios.post(`${process.env.REACT_APP_BACKEND_URL}/hostel/login`, {username,password})
         .then(result=>{
        if (result.status>=200&&result.status<300) {
          token = result.data.token
          console.log(token)
          localStorage.setItem('Kriti2024token',token)
          setLoggedIn(true)
          setTitle(username);
          setLink('/home');
          setTimeout(()=>{navigate('/home')}, 1000)
        }
        
      })
      .catch(error => {
      
        console.error('Error during login:', error);
      });
    }

  //   Axios.get(`${process.env.REACT_APP_BACKEND_URL}/hostel/login`,{
  //     headers:{"authorization":localStorage.getItem("Kriti2024token")}
  // })
  //        .then((res)=>{
    
  //          if(res.status===404){
  //              setErr(true)
  //              setTimeout(()=>{navigate('/login')},1000)
  //          }
  //          else if(res.status===200){
  //              setLoggedIn(true)
  //               setTimeout(()=>{navigate('/home')}, 1000)
  //          }
  //         });
  return (
    <div className="navbar1">
      {/* <Navbar1/> */}

    <div className="login-box">
      <h1>Login</h1>
      <form action="">
        {/* <div className="input-group">
          <label htmlFor="option-box">Hostel:</label>
          <select id="option-box" value={option} onChange={(e) => setOption(e.target.value)}>
            <option value="">Select Hostel Name</option>
            <option value="Lohit">Lohit</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div> */}

        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input 
              type="text" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Enter your username" />
        </div>
        
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" />
        </div>

        <button className="login-btn" onClick={(e)=>handleLogin(e)}>Login</button>

      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {Err && <p className='Err  text-red-500 w-6/12 text-lg mx-2 my-3'>{Err}</p>}
      {loggedIn && <p className="loggedIn text-lime-500 w-6/12 text-lg mx-2 my-3">Logged in!</p>}



    </div>
    </div>
  );
  
}
export default App;