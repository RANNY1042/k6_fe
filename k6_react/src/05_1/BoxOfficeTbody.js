
import { CgLoadbar } from "react-icons/cg";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

export default function BoxOfficeTbody({boxList,setMessage}) {

    const handleClick = (item) => {
        console.log(item)
        //할당연산자로 state변수 변경불가 => 업데이트 함수 변경
        //message = item 
        setMessage(item);
    }

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
    <tbody>

    {result}
    
    </tbody>
  )
}
