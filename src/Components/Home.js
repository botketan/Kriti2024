import client from '../client';
import React, { useState, useEffect } from 'react';
import PsView from './PsView';
const Home =()=> {
    const [highprep ,setHighprep] = useState(null);

    useEffect(() => {
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
       
    
      },[])
    return(
        <div className="w-[100%] my-[5vh]">
            <div className='flex justify-center w-[100%]'>
                <img src={require('../assests/HomeHero.png')} alt="logo" className="w-[90vw]"/>
            </div>
            <h2 className='text-4xl text-[#986C4A] font-open font-medium mx-[5vw] my-[10vh]'>HIGH PREP</h2>
            {highprep && <PsView data={highprep}/>}
        </div>
    )
}

export default Home;