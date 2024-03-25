import TailButton from "../UI/TailButton"
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function RefVal() {

    let cnt = 0;   //컴포넌트 변수
    const [stCnt, setStCnt] =useState(0); //state변수
    const refCnt = useRef(0); // ref변수

    const handlelocal = () => {
        cnt = cnt+1;
        console.log('cnt= ', cnt);
    }

    const handleState = () => {
        setStCnt(stCnt+1) ;

    }
    const hadleRef = () => {
        refCnt.current = refCnt.current +1;   //화면이 재렌더링될때 바뀐다. //폼태그의 값을 가지고 올때 주로 쓴다
        console.log("stCnt =", refCnt.current)
    }

    useEffect(()=>{
        console.log("stCnt =",stCnt)
    },[stCnt])



  return (
    <div className="w-11/12 grid grid-cols-3 gap-4">
    <div >
      컴포넌트 변수(지역변수) : {cnt}
      
    </div>

    <div>
        State 변수(지역변수): {stCnt}
    </div>

    <div>
        Ref 변수 : {refCnt.current}
    </div>

    <div>
     <TailButton caption="컴포넌트 변수"
     color ="blue"
     handleClick={handlelocal}/>
    </div>

    <div>
     <TailButton caption="컴포넌트 변수"
     color ="blue"
     handleClick={handleState}/>
    </div>

    <div>
     <TailButton caption="컴포넌트 변수"
     color ="blue"
     handleClick={hadleRef}/>
    </div>

    </div>
  )
}
