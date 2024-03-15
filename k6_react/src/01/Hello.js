import './Hello.css'

function Hello(){

    let n = Math.floor(Math.random()*100)+1;

    const st1 = {
        backgroundColor: "darkblue",
        color: "white"
    } //오브젝트의 키값을 카멜 표기법으로 써야한다.

    // let s = '';  //s가 문자열임을 나타냄 
    // if (n%2 ==0) s ="짝수";
    // else s = "홀수";

    const st2 = {
        color: "blue"
    }

    const st3 = {
        color : "red"
    }

    let x;

    const currentTime = new Date();

    return (
    <h1>
        <p>{currentTime.toLocaleTimeString()}</p>
        <span style={st1}> Hello</span>
        <span style={{display:"inline-flex",margin:"10px"}}>
            {n<10? `0${n}`:n}
            </span>
        {n%2 ===0? <span style={st2}>짝수</span>:<span style={st3}>홀수</span>} {/*삼항연산자*/}
        {n%2 ===0 && "★"}
        {n%2 ===1 && "★★"} {/*조건부 렌더링*/}
        <p>{ x || "x는 undifineded입니다."}</p>
        
    </h1>
    );

} export default Hello;
