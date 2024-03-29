import BoxOffice from "./BoxOffice.json";
import { CgLoadbar } from "react-icons/cg";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react"; //상태를 감지해서 변경되는 부분을 렌더링해주는 제어장치
import TailInput from "../UI/TailInput";
import BoxOfficeTbody from "../05_1/BoxOfficeTbody";

export default function BoxOfficeDate() { //영화목록 json가져오기
  const [message,setMessage] = useState();
  const[boxList, setBoxList] = useState([]);
  const[trs,setTrs] =useState([]);
  const boxRef = useRef();

  const inputRef = useRef() ;

  // const [bts,setBts] = useState([]);
  // const [tags,setTags] = useState([]);

  const handleClick = (mv) => {

  }

  useEffect(()=>{

    if(!boxList) return;
        
    const tm = <BoxOfficeTbody boxList={boxList} setMessage={setMessage}/>

      setTrs(tm);

  },[boxList])

    
  const handleSelDate=()=>{
    let dt=boxRef.current.value.replaceAll('-','')

    getData(dt);
  //box office 데이터 fetch
  
  };

  const getData = (dt) =>{ 
    let url =`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
    url = url+`key=${process.env.REACT_APP_MV_API}&targetDt=${dt}`;
    console.log(url);

    fetch(url)
    .then(resp => resp.json())
    .then(data => console.log(data.boxOfficeResult.dailyBoxOfficeList))
    .catch(err => console.log(err))
  }
 
//   const getDataFetch = (url) => {
//     fetch(url)
//     .then(resp => resp.json())
//     .then(data => setTdata(data.data))
//     .catch(err => console.log(err))
// }


  return (


    <div className="w-full flex flex-col justify-center items-center">
            
      <TailInput className="bg-gray-50
      
                        border-gray-300
                        text-gray-900
                          text-sm rounded-lg
                        focus:ring-blue-500
                        focus:border-blue-500
                          block w-full p-2.5"
      
                 type="date"
                 inputRef={boxRef}
                 handleChange={handleSelDate}
                 ph=" "
                 />

      <div>
        {trs}
      </div>
    </div>
  );
}
