import BoxOffice from "./BoxOffice.json";
import { CgLoadbar } from "react-icons/cg";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react"; //상태를 감지해서 변경되는 부분을 렌더링해주는 제어장치

export default function BoxOfficeTb() { //영화목록 json가져오기
    const boxList = BoxOffice['boxOfficeResult']['dailyBoxOfficeList'];
    console.log(boxList)

    //state 변수
    const [message,setMessage] = useState();

    const handleClick = (item) => {
        console.log(item)
        //할당연산자로 state변수 변경불가 => 업데이트 함수 변경
        //message = item 
        setMessage(item);
    }


    // const[stCnt, setStCnt] = useState(0);

    // const handleLike = (t) => {
    //   console.log('handleLike'+t)
    //   cnt = cnt+1;
    //   console.log(`cnt=${cnt}`)
    //   setStCnt(stCnt+1);
    // }

    const result = boxList.map((box)=>{ 
        return(
    <tr className="hover:bg-gray-200" key={box.movieCd}  onClick={()=>{handleClick(box)}}>

      <td className="text-center" >{box.rank}</td>
      <td className="text-center" >{box.movieNm}</td>
      <td className="text-right" >{parseInt(box.salesAmt).toLocaleString()}원</td>  {/*인수로변환해서 천단위로 나타냄*/}
      <td className="text-right" >{parseInt(box.audiCnt).toLocaleString()}명</td>
      <td className="flex justify-center items-center pt-3">{parseInt(box.rankInten)=== 0? <CgLoadbar />
                                :parseInt(box.rankInten)>0? <FaArrowUp className="text-red-600"/>:
                                <FaArrowDown  className="text-blue-600"/>
                                } {/*삼항연산자를 활용해서 증감율 기호로 나타냄*/}
                                {parseInt(box.rankInten)!==0 && Math.abs(box.rankInten)} {/*인수와 절댓값을 활용해 증감량을 나타냄*/}
    </td>

    </tr>
        )
    })

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <table className="w-4/5 border">
        <thead>
    <tr className="text-center bg-blue-950 text-white">
      <th className="w-10">순위</th>
      <th>영화명</th>
      <th>매출액</th>
      <th>관객수</th>
      <th>증감율</th>
    </tr>
  </thead>

  <tbody>
    {result}  
  </tbody>

  <tfoot>
    <tr className="text-center">
    <td colSpan={5} className="bg-blue-950 text-white h-7" >
        {message === undefined && '영화를 선택해주세요'} 
        {message &&
        `[${message.movieCd}] ${message.movieNm}의 누적관객수 : ${parseInt(message.audiCnt).toLocaleString()}`}</td>
    </tr>  
  </tfoot>

    </table>
    </div>
  );
}
