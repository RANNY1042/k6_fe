
import MyClockImage from './MyClockImage';
import MyClockTime from './MyClockTime';
import "./Myclock.css";

function MyClock(){

    return(


       <div className="flex flex-col justify-center items-center">
       <MyClockImage></MyClockImage>
       <MyClockTime></MyClockTime>

       </div>

    );

}export default MyClock;