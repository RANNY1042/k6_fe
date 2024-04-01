import TailButton from "../UI/TailButton";
import { Link, useNavigate } from "react-router-dom";



export default function RouteNav() {
    
const Navigator = useNavigate();

  return (
    
    <div className="w-11/12 flex flex-col justify-center items-center">
        
        <ul className="w-11/12 flex justify-center">
            <li><Link to='/'>홈</Link></li>
            <li><Link to='/page1/오렌지'>page1</Link></li>
            <li><Link to='/page2?item1=커피&item2=주스'>page2</Link></li>
        </ul>

    <div className="w-11/12 flex justify-center items-center">       

    <TailButton
        caption="홈"
        color="blue"
        handleClick={()=>{Navigator("/")}}  />

    <TailButton 
        caption="page1"
        color="blue"
        handleClick={()=>{Navigator("/page1/포도")}} />


    <TailButton 
        caption="page2"
        color="blue"
        handleClick={()=>{Navigator("/page2?item1=사과&item2=바나나")}}
    />
    
    </div>

    </div>
  )
}
