const PsView =({data})=>{
    return(
        <div className="w-[100%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-[5vw] gap-[10vh]">
            {data.map((item)=>{
                return(
                    <a href={item.pdf.asset.url} target="_blank" className=" w-[300px] h-[300px] bg-[url(./assests/PSBackground.png)] overflow-hidden bg-contain text-[#C4764D] flex flex-col justify-center align-middle items-center gap-[8vh]">
                        <p className="font-moresugar font-semibold text-3xl h-fit max-w-[120px] text-center">
                            {item.title}
                        </p>
                        <p className="font-moresugar font-normal text-xl  text-[#C4764D] h-fit max-w-[120px] text-center">
                            {item.organiser}
                        </p>
                    </a>
                )
            })}
        </div>
    )
}

export default PsView;