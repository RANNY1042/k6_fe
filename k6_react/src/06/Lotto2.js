import TailButton from "../UI/TailButton";
import TailBall from "../UI/TailBall";
import { useState} from "react";

export default function Lotto2() {
 
  const [ballTags,setBallTags] = useState();

  const handleLottoClick = () => {

    let lotto_number=[];
      while(lotto_number.length<7){
         let num=Math.floor(Math.random()*45)+1;
         if(!lotto_number.includes(num)) lotto_number.push(num);
      } 
  
  console.log(lotto_number)
  lotto_number.splice(6,0,'+')
    
 const Number = lotto_number.map((item,idx) =>
      idx===6? <span className="text-2xl font-bold mx-2" key={`ball${item}`}>{item}</span>
       :  <TailBall n={item} key={`ball${item}`}/> 
  );

  console.log(Number)
  setBallTags(Number);
 }
 
  return (

    <div className='flex flex-col items-center space-y-8'>
    <div className='flex flex-row space-x-5 items-center'>

    {ballTags}

    </div>
    
    <div>
    <TailButton caption='로또번호생성' 
                color='blue'
                handleClick={handleLottoClick} />
    </div>
    </div>
  )
}
