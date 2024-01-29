import client from '../client';
import React, { useState, useEffect } from 'react';
import HostelPsView from './HostelPsView';
const SecondPage =()=> {
    const [highprep ,setHighprep] = useState(null);
    const [midprep , setMidprep] = useState(null);

    useEffect(() => {
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
        </div>
    )
}

export default SecondPage;