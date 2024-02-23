//Dom Tree가 완성된 후 실행
document.addEventListener("DOMContentLoaded",()=>{

 //버튼 가져오기 
const bt1 = document.querySelector("#bt1");
//버튼 이벤트 달기
bt1.addEventListener("click", ()=> {
    handleClick();
    });
});

const handleClick =() => {
    const randomNum1 = Math.floor(Math.random()*6+1);
    const img = document.querySelector("#img");
    img.setAttribute("src",`./img/${randomNum1}.png`);
    console.log("click",randomNum1)
}

/*
    함수작성 1
*/
/*
  function handleClick(n) {
  //  document.getElementById("msgArea").innerHTML ="안녕하세요"

  // 메시지 영역 가져오기 2
  //document.querySelector("#msgArea").innerHTML="<h2>버튼"+ n+"이 눌러졌습니다.</h2>";

  document.querySelector("#msgArea").innerHTML=`<h2>버튼 ${n} 이 눌러졌습니다.</h2>`;
} 
*/


/*
    함수작성 2 : 화살표 함수
*/
    

