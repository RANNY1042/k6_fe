import TailButton from "../UI/TailButton";
import { Link, useNavigate } from "react-router-dom";



export default function RouteNav() {
    
const Navigator = useNavigate();

  return (
    
    <div className="w-11/12 flex flex-col justify-center items-center">
        
        <ul className="w-11/12 flex justify-center">
            <li><Link to='/'>홈</Link></li>
            <li><Link to='/page1'>page1</Link></li>
            <li><Link to='/page2'>page2</Link></li>
        </ul>

    <div className="w-11/12 flex justify-center items-center">       

    <TailButton
        caption="홈"
        color="blue"
        handleClick={()=>{Navigator("/")}}  />

    <TailButton 
        caption="page1"
        color="blue"
        handleClick={()=>{Navigator("/page1")}} />


    <TailButton 
        caption="page2"
        color="blue"
        handleClick={()=>{Navigator("/page2")}}
    />
    
    </div>

    </div>
  )
}
