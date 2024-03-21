import bank from "./img/bank.png"
import market from "./img/market.png"
import busan from "./img/busan.png"
import { useState } from "react";

export default function Foodcard2({fobj}) {

    const[isClick, setIsClick] = useState(false);
       
    const fimg = fobj["구분"] === "기초푸드뱅크" ? bank : 
                fobj["구분"] === "기초푸드마켓" ? market : busan;

    const handleIsClick = () =>{
        setIsClick(!isClick);
    }

  return (
    <div className="w-11/12 flex border rounded-xl"
        
            onClick={handleIsClick}>

    <div className="w-1/6 max-w-xl flex justify-center items-center m-3 mx-3">
        <img src={fimg} alt={fimg}></img>
    </div>
    
    <div className="w-full flex flex-col justify-center m-3 ">
    <div>
        <h1 className="text-2xl font-bold text-slate-700"> 
        {fobj["사업장명"]}</h1>
        <h2 className="text-lg font-medium">
        {fobj["운영주체명"]}</h2>
        <h3 className="text-xs text-gray-400">
        {fobj["사업장 소재지"]}</h3>
    </div>
    <div className=" w-full p-2 items-start 
                     bg-gray-500  text-white mt-4 rounded-md">

                    {isClick &&`팩스번호 : ${fobj["팩스번호"]},`}
                    <br></br>
                    {isClick &&`연락처(대표번호) :${fobj["연락처(대표번호)"]}`}
                    </div>
    </div>
    
    </div>
  
  )
}
