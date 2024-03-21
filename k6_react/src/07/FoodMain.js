import Foodcard2 from "./Foodcard2";
import fdata from "./fooddata.json";
import TailButton from "../UI/TailButton";
import { useState } from "react";

export default function FoodMain() {
    // console.log(fdata) //map함수로 데이터 호출

    const [cards,setCards] = useState([]);

    let c1 = fdata.map(item=>item["운영주체 분류"]);
    c1 = new Set(c1) ; //중복제거
    c1 =[...c1]; //전개연산자로 배열이됨 (다섯개의 분류가됨)
    console.log(c1)

    const handleList = (citem)=> {
        console.log(citem)

        const tm = fdata.filter(item => item["운영주체 분류"] === citem)
        .map(item =>
        <Foodcard2 fobj={item} key={item["사업장명"]} />
        );

    setCards(tm);
        }


    const c1Bts =c1.map(item=>
        <TailButton caption={item} 
                    color="blue" 
                    key={item}
                    handleClick={() => handleList(item)} />
        );

   
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
    <div className="flex w-full justify-center items-center space-x-2 ">
        {c1Bts}
    </div>
    <div className="mt-4 flex-col w-10/12 grid grid-cols-1 lg:grid-cols-2 
                    xl:grid-cols-3 gap-4">
     {cards}
    </div>
    </div>
  );
}

