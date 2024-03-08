document.addEventListener("DOMContentLoaded",()=>{
    const bt = document.querySelector("button");
    const numDisp = document.querySelector("#numDisp");

    let nums = [];

    bt.addEventListener("click",()=>{
        nums =[];
        //배열 초기화 nums= []; nums.length=0;
        //랜덤 ~45까지 랜덤수가 7개 만들기 - 중복되지 않게 
        while(nums.length<7) {
            let n = Math.floor(Math.random()*45)+1;
            nums.push(n)
        }
        //문자열 만들기
        let tags='';
        numDisp.innerHTML = "<span class='sp0'>1</span>"


        console.log(nums);


    });





});