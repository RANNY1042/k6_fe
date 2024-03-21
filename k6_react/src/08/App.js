
import './App.css';
import MainHeader from './01/MainHeader';
import Hello from './01/Hello';


function App() {
  return (
    <> 
    <div className="App">
      <MainHeader></MainHeader>
      <Hello></Hello>
      <Hello></Hello>
      <MainHeader></MainHeader>
      <Hello></Hello>
      <Hello></Hello>
      
      
    </div>
    </> //프레그먼트 태그
  );
}

//화살표 함수로 작성가능
// const App = () = > {
  
//   return();
// }

export default App; //리액트는 자바스크립트의 모듈형 함수, 모듈형태를 구성
