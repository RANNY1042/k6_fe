import TailButton from '../UI/TailButton'
import TailInput from '../UI/TailInput'
import FestivalCard from '../12/FestivalCard'
import { useRef, useState, useEffect } from 'react'

export default function FestivalMain() {  
  
    const selRef = useRef();
    const [tdata, setTdata]=useState();
    const [guname,setGuname]=useState();
    const [optags, setopTags]=useState();
    const [card,setCard]=useState();

    //select 값
    

    
    //select 선택
    const handleSelgu = ()=>{
        console.log(selRef.current.value)

        let tfilter = tdata.filter(item => item.GUGUN_NM === selRef.current.value)
                        .map((item)=> <FestivalCard gdata={item} />)
                        console.log("tfilter",tfilter)   
                        
               setCard(tfilter);
    }

    const getData = (url)=>{  //데이터 패치
    fetch(url)
    .then(resp => resp.json())
    .then(data => setTdata(data.getFestivalKr.item))
    .catch(err => console.log(err))
    }
    
        useEffect(()=>{
            let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`
            url = url+`serviceKey=${process.env.REACT_APP_APIKEY}`;
            url = url+`&pageNo=1&numOfRows=40&resultType=JSON`
            
            getData(url);
        },[]);

 
        useEffect(()=>{
            if(!tdata) return;

            console.log(tdata);
    
            let tm = tdata.map((item)=> item.GUGUN_NM) //map함수
            tm = new Set(tm);   //중복제거
            tm =[...tm].sort(); //전개연산자 
            setGuname(tm);
           
        },[tdata]);



           //Guname select box 구정보 만들기
        useEffect(()=>{
            if(!guname) return;
            console.log(guname);
            let tm = guname.map((item)=>
                <option value={item} key={item}> {item}</option>
            )
            setopTags(tm);

        },[guname]);


    return (
    <div className='w-full'>
    <form className="w-11/12 justify-center flex flex-col">
    <label htmlFor="gu" 
        className="block mb-2 text-2xl font-bold text-gray-900 dark:text-white">축제정보</label>
    <select id="gu" 
            onChange={handleSelgu}
            ref = {selRef} //useRef 함수
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5           
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white    
             dark:focus:ring-blue-500 dark:focus:border-blue-500 justify-center items-center">
      <option>지역구선택</option>
        {optags}
    </select>
  </form>
  <div className='grid grid-cols-4 md:grid-cols-3 gap-4 justify-center my-10'>

        {card}

  </div>  
  </div>
  )}








        
