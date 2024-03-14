
import './App.css';
import MainHeader from './01/MainHeader';
import Hello from './01/Hello';
import HelloCss from './02/HelloCss';

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
          <div>홈</div>
       </header>
       <main className='grow'>
       <HelloCss/>
       </main>
       <footer className='flex justify-center items-center
                        h-10
                        p-10
                        text-xs font-thin text-white
                        bg-black
                        '>                 
        풋터풋터풋터풋터풋터풋터풋터
       </footer>
     
    </div>
    
    //</> //프레그먼트 태그
  );
}

//화살표 함수로 작성가능
// const App = () = > {
  
//   return();
// }

export default App; //리액트는 자바스크립트의 모듈형 함수, 모듈형태를 구성
