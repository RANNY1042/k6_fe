

export default function BoxOfficeinfo({message}) {

  return (
    <tfoot>
    <tr className="text-center">
    <td colSpan={5} className="bg-blue-950 text-white h-7" >
        {message === undefined && '영화를 선택해주세요'} 
        {message &&
        `[${message.movieCd}] ${message.movieNm}의 누적관객수 : ${parseInt(message.audiCnt).toLocaleString()}`}</td>
    </tr>  
  </tfoot>
  )
}
