import React from 'react'
import TailInput from '../UI/TailInput'
import TailButton from '../UI/TailButton'
import { useState,useEffect, useRef } from 'react'

export default function RefInput() {

    const inputRef = useRef() ;

    const [bts,setBts] = useState([]);
    const [tags,setTags] = useState([]);

    const handleAdd = () =>{
        if(inputRef.current.value ===''){ //ref변수는 ref속성으로 연결된다 ./ .current.value로 값으 가지고온다.
            alert('값을 입력하세요.');
            inputRef.current.focus();
        }

        setBts([...bts,inputRef.current.value]);
       
    }

    const handleremove = ()=>{

        
    }


    useEffect(()=> {
        inputRef.current.value = '' ;
        inputRef.current.focus() ;

        let tm = bts.map((item,idx)=>
                        <TailButton caption={item}
                        key={`bt${idx}`}
                        color="red" />);

                        setTags(tm);

    },[bts]);



  return (
    <div className='w-10/12 flex flex-col justify-center items-center'>
    <div className='w-10/12 flex flex-row justify-center items-center space-x-3'>
    <input type="text"
            ref={inputRef}
                id="first_name"
               className="bg-gray-50
                             border-gray-300
                             text-gray-900
                             text-sm rounded-lg
                             focus:ring-blue-500
                             focus:border-blue-500
                             block w-full p-2.5"
                             placeholder="값입력" />
    
    <TailButton className='w-2/12'
     caption="등록"
     color ="red"
     handleClick={handleAdd}/>
    
    <TailButton className='w-2/12'
     caption="취소"
     color ="blue"
     handleClick={handleremove}/>
    
    </div>


    <div className='flex mt-10 space-x-3 '>
        {tags}
    </div>

    </div>
  )
}
