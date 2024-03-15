import { FcLikePlaceholder } from "react-icons/fc";

export default function Mylistbox({title, imgUrl, content}) {
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
            <span className="text-1xl text-base"><FcLikePlaceholder />
        좋아요</span>
        <span>0</span>
        </p>
        </div>
      );
}
