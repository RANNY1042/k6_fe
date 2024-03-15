
import './App.css';
import { FaHome } from "react-icons/fa";
// import HelloCss from './02/HelloCss';
import MylistMain from './04/MylistMain';

function App() {
  return (

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
          <div><FaHome/></div>
       </header>
       <main className='grow flex justify-center items-center scroll-auto'>
        <MylistMain />
       </main>
       <footer className='flex flex-col justify-center items-center
                        h-20
                        text-sm font-thin text-white
                        bg-black
                        '>                 
        ⓒ 2024 Parkhyeran. All rights reserved.
       </footer>
     
    </div>
    
    
  );
}

//</> //프레그먼트 태그

//화살표 함수로 작성가능
// const App = () = > {
  
//   return();
// }

export default App; //리액트는 자바스크립트의 모듈형 함수, 모듈형태를 구성
