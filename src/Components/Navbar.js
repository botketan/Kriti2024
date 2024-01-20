const  Navbar=()=> {
    return(
        <div className="w-[100%] flex flex-row flex-wrap h-[10vh] justify-between mx-5 px-[3vw] my-[2vh] content-center">
                <img src={require('../assests/Techboardlogo.png')} alt="logo" className="w-[5vw] "/>
            <p className="font-gt text-6xl text-black">
                Kriti 24'
            </p>
            <button className="text-white p-1 m-1 bg-[#502515] w-[8vw] text-xl h-[8vh] rounded-lg">
                Login
            </button>
        </div>
    )
}

export default Navbar;