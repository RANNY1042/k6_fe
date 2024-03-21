import BoxOffice from "./BoxOffice.json";
import { useState } from "react"; //상태를 감지해서 변경되는 부분을 렌더링해주는 제어장치
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeinfo from "./BoxOfficeinfo";

export default function BoxOfficeTb() { //영화목록 json가져오기

  const boxList = BoxOffice['boxOfficeResult']['dailyBoxOfficeList'];
  const [message,setMessage] = useState();
    //state 변수

  return (
    <div className="w-full flex flex-col justify-center items-center">
      
      <table className="w-4/5 border">

    <BoxOfficeThead />
    <BoxOfficeTbody boxList={boxList} setMessage={setMessage} /> 
    <BoxOfficeinfo message={message} />
    </table>
    
    
 
    </div>
  );
}
