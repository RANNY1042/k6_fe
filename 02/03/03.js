
/*
    함수작성 1
*/

  function handleClick(n) {
  //  document.getElementById("msgArea").innerHTML ="안녕하세요"

  // 메시지 영역 가져오기 2
  //document.querySelector("#msgArea").innerHTML="<h2>버튼"+ n+"이 눌러졌습니다.</h2>";

  document.querySelector("#msgArea").innerHTML=`<h2>버튼 ${n} 이 눌러졌습니다.</h2>`;
}


/*
    함수작성 2 : 화살표 함수
    */
    const handleClick = (n) => {
        document.querySelector("#msgArea").innerHTML=`<h2>버튼 ${n} 이 눌러졌습니다.</h2>`;
    }