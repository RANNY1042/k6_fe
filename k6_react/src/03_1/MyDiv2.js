
import MyDiv3 from "./MyDiv3";
export default function MyDiv2({d1,d2,d3}) {

  return (
    <div className="w-4/5 h-4/5 flex flex-col justify-center items-center
                    bg-lime-700
                    text-white">
      <p className="flex w-full font-bold
                    justify-start
                    text-2xl
                    m-7
                    p-5
                    ">                    
     {`${d1}>${d2}`}               
    </p>
    <MyDiv3 d11={d1} d21={d2} d31={d3} />               
    </div>
  )
}