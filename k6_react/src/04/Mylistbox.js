import { FcLikePlaceholder } from "react-icons/fc";
import { useState } from "react";

export default function Mylistbox({title, imgUrl, content}) {

    let cnt = 0;
    
    const[stCnt, setStCnt] = useState(0);

    const handleLike = (t) => {
      console.log('handleLike'+t)
      cnt = cnt+1;
      console.log(`cnt=${cnt}`)
      setStCnt(stCnt+1);
    }
    return (
        <div className="w-10/12 flex justify-items-center border-b border rounded  hover:bg-gray-50" >
          <div className="w-1/4 max-w-48"> 
            <img src={imgUrl} alt={title}></img>
        </div>
        <div className="w-3/4 items-center px-5 py-3">
          <h1 className="text-2xl font-bold text-gray-700">{title}</h1>
          <p className="w-full text-gray-600">{content}</p>
        </div>  
        <p className="w-1/5 justify-end mt-5 font-bold">
            <span className="text-1xl text-base" onClick={()=>{handleLike(title)}}><FcLikePlaceholder className="text-red-500 hover:text-black" />
        좋아요</span>
        <span>{stCnt}</span>
        </p>
        </div>
      );
}
