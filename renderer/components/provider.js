import { useState } from 'react';

export default function Provider({ _provider, active, handleTabChange }) {
    const [hover, setHover] = useState(false);
    // console.log("provider", _provider, active);

    const handleHover = () => {
        if (!active) { setHover(true); }
    }
    const exit = () => { setHover(false); }
    const changeTab = () => { 
        handleTabChange(_provider.toLowerCase()); 

    }
    
    if (active) { return (
                <div className="px-2 flex flex-col justify-end relative">
                    <div className="text-gray-900 hover:bg-[#c5ccdb9a] hover:cursor-pointer mb-[3px] px-2 py-1 rounded">
                        { _provider }
                    </div>
                    <div className="border-b-[3px] border-gray-600 -mb-[2px]"></div>
                </div>
    )} else {
        return (
                <div onClick={changeTab} className="px-2 flex flex-col justify-end relative ">
                    {
                        _provider !== "Groq" && _provider !== "Perplexity" &&
                        <div id='soon' className={" flex justify-end absolute top-0 duration-300 transform transition-all " + ( hover ? "scale-100" : "scale-0")}>
                            <span className="border border-[#f68193] bg-[#f6819331] rounded-full px-2 text-xs ml-5 -mb-2">soon</span>
                        </div>
                    }

                    <div className="text-gray-600 hover:bg-[#c5ccdb9a] hover:cursor-pointer mb-[3px] px-2 py-1 rounded duration-300 transform" onMouseEnter={handleHover} onMouseOut={exit}>
                        { _provider }
                    </div>
                    <div className="border-b-[3px] border-[#0000] -mb-[2px]"></div>
                </div>
        )
    }
    
}