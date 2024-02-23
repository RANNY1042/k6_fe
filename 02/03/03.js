//Dom Tree가 완성된 후 실행
document.addEventListener("DOMContentLoaded",()=>{

    console.log("DOMContedtLoaded ok");

// 버튼생성

const bt3 = document.createElement("button");
const bt3Txt = document.createTextNode("버튼3");
bt3.appendChild(bt3Txt);

bt3.setAttribute("id","bt3");
bt3.appendChild(bt3Txt);

//버튼추가하기

document.querySelector("#btArea2").append(bt3);

//버튼 이벤트 달기
bt3.addEventListener("click", ()=>{
    handleClick(3) ;
    });
});
const bt4 = document.createElement("button");
const bt4Txt = document.createTextNode("버튼4");
bt4.appendChild(bt3Txt);

document.querySelector("#btArea3").append(bt4);



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
    const handleClick = (n) => {
        let mage;
        if (n==1) msg = "안녕하세요";
        else msg = "안녕히 가세요";
        document.querySelector("#msgArea").innerHTML=`<h2>${msg}</h2>`;
    }

