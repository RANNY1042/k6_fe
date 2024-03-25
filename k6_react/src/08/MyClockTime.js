import { useState } from "react";
import { useEffect } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";


function MyClockTime(){
    const [currentTime,setCurrentTime] = useState();
    const [tm, setTm]=useState(0);

    //컴포넌트 생성시 최초 1번 실행 

    useEffect(()=>{
      
        const t = setInterval(()=>{
            setCurrentTime(new Date());       
        }, 1000);   
        console.log("[]=>",currentTime,tm)
        
        return () => {clearInterval(t)}
    },[]); //바뀔때 한번만 실행 ,뒤에 대괄호, 맨처음에 무조건 한번실행


    return(
     
    <h1 className="font-bold text-2xl">
    현재시각: {currentTime.toLocaleTimeString()}

    </h1>


    );

}export default MyClockTime;