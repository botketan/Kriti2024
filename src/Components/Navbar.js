import { Link } from 'react-router-dom';

const  Navbar=()=> {
    return(
        <div className="md:w-[100%] lg:w-[100%] flex flex-row flex-wrap h-[10vh] justify-between mx-5 px-[3vw] my-[4vh] content-center">
                <img src={require('../assests/Techboardlogo.png')} alt="logo" className="w-auto  max-w-[60px] md:max-w-[100px] lg:max-w-[100px]"/>
            <p className="font-gt text-4xl md:text-4xl lg:text-6xl text-black my-[10px]">
                Kriti 24'
            </p>
            
            <Link to ="/login">
                <button className="text-white p-1 m-1 bg-[#502515] w-[25vw] md:w-[8vw] lg:w-[8vw] text-xl h-[8vh] rounded-lg ">
                    Login
                </button>
            </Link>
        </div>
    )
}

export default Navbar;