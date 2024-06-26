import client from '../client';
import React, { useState, useEffect } from 'react';
import PsView from './PsView';
const Home =({setTitle, setLink})=> {
    const [highprep ,setHighprep] = useState(null);
    const [midprep , setMidprep] = useState(null);
    const [lowprep , setLowprep] = useState(null);
    const [noprep , setNoprep] = useState(null);

    useEffect(() => {
        setTitle("Login");
        setLink("/login");
        client
			.fetch(
				`*[_type == "highprep"]{
                    title,
                    organiser,
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
            {highprep && <PsView data={highprep}/>}
            <h2 className='text-4xl text-[#986C4A] font-open font-medium mx-[5vw] my-[10vh]'>MID PREP</h2>
            {midprep && <PsView data={midprep}/>}
            <h2 className='text-4xl text-[#986C4A] font-open font-medium mx-[5vw] my-[10vh]'>LOW PREP</h2>
            {lowprep && <PsView data={lowprep}/>}
            <h2 className='text-4xl text-[#986C4A] font-open font-medium mx-[5vw] my-[10vh]'>NO PREP</h2>
            {noprep && <PsView data={noprep}/>}
        </div>
    )
}

export default Home;