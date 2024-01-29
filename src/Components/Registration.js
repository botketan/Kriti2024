import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import './RegistrationStyle.css'

const Registration = () => {
    const {num,name} = useParams()
    const navigate = useNavigate()
    const [errorMsg,setErrorMsg] = useState(false)
    const [successMsg, setSuccessMsg] = useState(false)
    // console.log([...Array(parseInt(num)).keys()])
    // console.log(process.env.REACT_APP_BACKEND_URL)
    const handleSubmit = (e)=>{
        e.preventDefault()
        const formEle = document.querySelector("form")
        const formData = new FormData(formEle)
        const participants = []
        let arrObject = {}
        for (const entry of formData.entries()) {
            arrObject[entry[0]] = entry[1]
            if (entry[0] == 'year'){
                participants.push(arrObject)
                arrObject = {}
            }
          }
          console.log({psName:name, participants})
        // axios.post(`${process.env.BASE_URL}/register`, {})
        fetch(`${process.env.REACT_APP_BACKEND_URL}/register`, {
            method:'POST', 
            headers:{
                Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}` //change to ${localStorage.getItem(token)} after login is implemented
            },
            body:{psName:name, participants}.json
        })
        .then((res)=>{
            const stat = res.status 
            if(stat==400){
                setErrorMsg(true)
                setTimeout(()=>{navigate('/login')},2000)
            }
            else if(stat==200){
                setSuccessMsg(true)
                setTimeout(()=>{navigate('/home')}, 2000)
               
            }
        })
    }

    // useEffect(()=>{
    //     fetch(`${process.env.REACT_APP_BACKEND_URL}/find`,{
    //         method:'GET', 
    //         body:{psName:name}.json, 
    //         headers:{Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`}
    //     })
    //     .then((res)=>{
    //         return res.json()
    //     })
    //     .then((data)=>{
    //         console.log(data)
    //     })
    //     .catch((err)=>{console.log(err)})
    // },[])
    
    
    
    return ( 
        <div>
            <form className="form" onSubmit={(e)=>handleSubmit(e)}>
                {/* <input name="ps-name" value={name} style={{visibility:"hidden"}}></input> */}
                <div className="PS-name">{name}</div>
                {
                    [...Array(parseInt(num)).keys()].map((i)=>(
                        <div className="registration-box">
                            <h2>{`Participant ${i+1}`}</h2>
                            <div className="input-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" placeholder="Enter your name" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="roll">Roll Number:</label>
                                <input type="text" name="rollNo" placeholder="Enter your roll Number" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="year">Year:</label>
                                <select name="year" >
                                <option value="">Select Year</option>
                                <option value="1st">1st</option>
                                <option value="2nd">2nd</option>
                                <option value="3rd">3rd</option>
                                <option value="4th">4th</option>
                                </select>
                            </div>
                            {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} */}
                        </div>
                    ))
                }
                {errorMsg && <p className="errorMsg">Login Session expired. Login and try again</p>}
                {successMsg && <p className="successMsg">Registered Successfully</p>}
                
                <button className="saveButton" >Register</button> 

            </form>
        </div>
     );
}
 
export default Registration;