import client from '../client';
import React, { useState, useEffect } from 'react';
import HostelPsView from './HostelPsView';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SecondPage =({setLink,setTitle})=> {
    const [highprep ,setHighprep] = useState(null);
    const [midprep , setMidprep] = useState(null);
    const [lowprep , setLowprep] = useState(null);
    const [noprep , setNoprep] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/hostel/getHostel`,{
            headers:{"authorization":localStorage.getItem("Kriti2024token")}})
            .then((res)=>{
                setTitle(res.data.username);
                setLink('/home');
            })
            .catch((err)=>{
                navigate('/login');
                console.log(err)}) 

        client
			.fetch(
				`*[_type == "highprep"]{
                    title,
                    organiser,
                    people,
                    pdf{
                        asset->{
                            _id,
                            url,
                        },
                        alt
                    }
                }`
			)
			.then((data) =>{ setHighprep(data);
            console.log(data);})
			.catch(console.error);
        client
			.fetch(
				`*[_type == "midprep"]{
                    title,
                    organiser,
                    people,
                    pdf{
                        asset->{
                            _id,
                            url,
                        },
                        alt
                    }
                }`
			)
			.then((data) =>{ setMidprep(data);
            console.log(data);})
			.catch(console.error);
        client
			.fetch(
				`*[_type == "lowprep"]{
                    title,
                    organiser,
                    people,
                    pdf{
                        asset->{
                            _id,
                            url,
                        },
                        alt
                    }
                }`
			)
			.then((data) =>{ setLowprep(data);
            console.log(data);})
			.catch(console.error); 
        client
			.fetch(
				`*[_type == "noprep"]{
                    title,
                    organiser,
                    people,
                    pdf{
                        asset->{
                            _id,
                            url,
                        },
                        alt
                    }
                }`
			)
			.then((data) =>{ setNoprep(data);
            console.log(data);})
			.catch(console.error);         
    
      },[])
    return(
        <div className="w-[100%] my-[5vh]">
            <div className='flex justify-center w-[100%]'>
                <img src={require('../assests/HomeHero.png')} alt="logo" className="w-[90vw]"/>
            </div>
            <h2 className='text-4xl text-[#986C4A] font-open font-medium mx-[5vw] my-[10vh]'>HIGH PREP</h2>
            {highprep && <HostelPsView data={highprep}/>}
            <h2 className='text-4xl text-[#986C4A] font-open font-medium mx-[5vw] my-[10vh]'>MID PREP</h2>
            {midprep && <HostelPsView data={midprep}/>}
            <h2 className='text-4xl text-[#986C4A] font-open font-medium mx-[5vw] my-[10vh]'>LOW PREP</h2>
            {lowprep && <HostelPsView data={lowprep}/>}
            <h2 className='text-4xl text-[#986C4A] font-open font-medium mx-[5vw] my-[10vh]'>NO PREP</h2>
            {noprep && <HostelPsView data={noprep}/>}
        </div>
    )
}

export default SecondPage;