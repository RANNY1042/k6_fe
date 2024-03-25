import TailButton from "../UI/TailButton"

export default function TrafficNav({title,category,sel,setSel}) {

    const handleBtClick = (item)=>{
        setSel(item)
    }

    const bts = category.map(item=>
        <TailButton caption ={item}
                    color ={item ===sel ? "red":"blue"}
                    key = {item}
                    handleClick ={()=>handleBtClick(item)} />
    );

  return (
    <div className="w-full flex flex-row justify-between items-center mt-2 ">
       
       <div className="m-5 font-bold text-2xl text-gray-700 justify-between">
         교통사고 {title}
       </div>
      <div className="space-x-5 font-thin justify-between">
        {bts}
      </div>
      
    </div>
  )
}
