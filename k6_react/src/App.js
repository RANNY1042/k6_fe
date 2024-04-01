import './App.css';
import { FaHome } from "react-icons/fa";
// import TrafficMain from './09/TrafficMain';
import MyClock from './08/MyClock';
// import Foodcard2 from "./07/Foodcard2.js";
// import RefVal from './10/RefVal';
// import RefInput from './10/RefInput';
import BoxOfficeDate from './10_1/BoxOfficeDate';
// import TailInput from './UI/TailInput';
// import GalleryCard from './11/GalleryCard'
import GalleryMain from './11/GalleryMain'
import FestivalMain from './12/FestivalMain';
// import FestivalCard from './12/FestivalCard';
import Lotto2 from './06/Lotto2'
// import RouteMian from './13/RouteMain'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


function App() {

  // const Navigator = useNavigate();

  return (
    <BrowserRouter>

    <div className='flex flex-col 
                    w-full max-w-screen-xl
                    h-screen
                    mx-auto
                    overscroll-auto
                    '>
       <header className='flex justify-between items-center
                          h-20
                          p-10
                          text-xl font-bold text-yellow-900
                          bg-amber-300
                          '>
          <div>리액트 실습</div>
          <Link to='/lotto'>로또</Link>
          <Link to='/box'>박스오피스</Link>
          <Link to='/Gallery'>갤러리</Link>
          <Link to='/festival'>페스티벌</Link>
          
          
          
          <div><Link to ='/'><FaHome /></Link></div>

       </header>
       <main className='grow flex justify-center scroll-auto mt-10'>
  {/* 
        <Foodcard2 /> */}
        {/* <MyClock /> */}
        {/* <TrafficMain /> */}
        {/* < RefVal /> */}
        {/* <RefInput /> */}
        {/* <BoxOfficeDate /> */}
        {/* <GalleryCard /> */}
        {/* <GalleryMain /> */}
        {/* <FestivalMain /> */}
        {/* <FestivalCard /> */}
        {/* <RouteMian /> */}
        
        <Routes>
        <Route path='/' element={<MyClock />} />
        <Route path='/lotto' element={<Lotto2 />} />
        <Route path='/box' element={<BoxOfficeDate />} />
        <Route path='/Gallery' element={<GalleryMain />} />
        <Route path='/festival' element={<FestivalMain />} />

        </Routes>

       </main>
       <footer className='flex flex-col justify-center items-center
                        h-20 mt-10
                        text-sm font-thin text-white
                        bg-black
                        '>                 
        ⓒ 2024 Parkhyeran. All rights reserved.
       </footer>
     
    </div>
    </BrowserRouter>
    
  );
}

//</> //프레그먼트 태그

//화살표 함수로 작성가능
// const App = () = > {
  
//   return();
// }

export default App; //리액트는 자바스크립트의 모듈형 함수, 모듈형태를 구성
