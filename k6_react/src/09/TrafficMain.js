
import { useEffect } from "react"
import { useState } from "react";
import TrafficNav from "./TrafficNav";

export default function TrafficMain() {

    const [tdata,setTdata] = useState(); //전체 fetch데이터 호출
    const [C1, setC1] = useState(); //대분류 중복제거
    const [selC1, setSelC1] = useState(); //선택된 대분류
    const [C2, setC2] = useState();
    const [selC2, setSelC2] = useState();
    const [detail, setDetail] = useState();
    const [info, setInfo] = useState(); //상세정보

    const getDataFetch = (url) => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => setTdata(data.data))
        .catch(err => console.log(err))
    }

    useEffect(()=>{

        let url= `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`;
        url = `${url}page=1&perPage=20&`;
        url = `${url}serviceKey=${process.env.REACT_APP_APIKEY}`;
    
        console.log(url)

        getDataFetch(url);
    
    },[]);


    useEffect(()=> {
        
        if(!tdata) return;
        
        let temp = tdata.map(item=>item['사고유형_대분류']);
        // console.log("tdata=>",tm);
        
        temp = new Set(temp);
        temp = [...temp];
         console.log(temp)
        //  console.log(tdata)

         setC1(temp);

    },[tdata]);

    useEffect(()=>{

        if(!tdata) return;
        let temp = tdata.filter(item=>item.사고유형_대분류 === selC1)
                    .map(item=>item['사고유형_중분류'])
        
                    setInfo('')
                    setC2(temp);

    } ,[selC1]); 
    

    useEffect(()=>{

        if(!tdata) return;
        let temp = tdata.filter(item=>item['사고유형_대분류']=== selC1 && 
                                      item['사고유형_중분류'] === selC2)

                                        console.log("detail=>",detail)
                                        setDetail(temp[0])
      },[selC2]);

    useEffect(()=>{
        if(!tdata) return;
        console.log("detail=>",detail)
        const keyArr = ['사고건수','사망자수','중상자수','경상자수','부상신고자수']

        let tm = keyArr.map(k=>
            <div className="flex justify-center justify-items-center items-center border-solid box-border h-10 w-50 border-2">
                <div className="text-lg font-bold items-center">{k}</div>
                <div className="text-lg font-bold m-5 items-end">{detail[k]}</div>
            </div>)
            setInfo(tm);
    
    },[detail]);
    
  

  return (
    <div className="flex flex-col items-center w-full">
      {C1 && <TrafficNav title = "대분류"
                  category ={C1}
                  sel = {selC1}
                  setSel ={setSelC1} />

      }
      {C2 && <TrafficNav title = "중분류"
                  category ={C2}
                  sel = {selC2}
                  setSel ={setSelC2} />

      }
      <div className="w-10/12 grid grid-cols-2
                     sm:grid-cols-4
                     lg:grid-cols-5
                     gap-5">
        {info}
      </div>       

    </div>
  )
}
