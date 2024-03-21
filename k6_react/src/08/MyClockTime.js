import { useState } from "react";
import { useEffect } from "react";


function MyClockTime(){

    const [currentTime,setCurrentTime] = useState();


    //useeffect hook 


    return(
    
    <h1 className="font-bold text-2xl">
    {/* 현재시각: {currentTime.toLocaleTimeString()} */}

    </h1>


    );

}export default MyClockTime;