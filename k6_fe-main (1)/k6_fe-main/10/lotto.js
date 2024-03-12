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
            if(!nums.includes(n)) nums.push(n);
        }

        
        let tags = [];
        tags =nums.map((v)=>
            `<span class ="sp${parseInt(v/10)}">${v}</span>`
        );

        tags.splice(6,0,'<span>+<span>');
        numDisp.innerHTML = tags.toString().replaceAll(',','');
        
        console.log(tags);



        //문자열 만들기
        // let tags='';
        // nums.map((v,i)=> {
        //     tags = tags + `<span class="sp${parseInt(v/10)}"}>${v}</span>`;
        //     if(i==5)
        //         tags=tags+`<span> + </span>`;
        // });
        // numDisp.innerHTML = tags;


        // let tags = [];
        // tags =nums.map((v)=>
        //     `<span class ="sp${parseInt(v/10)}">${v}</span>`
        // );

        // tags.splice(6,0,'<span>+<span>');
        // let s = tags.toString().replaceAll(',','');

        // console.log(s); //배열안의 문자열 8개
        // numDisp.innerHTML=s;

    });


});