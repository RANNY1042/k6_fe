
document.addEventListener("DOMContentLoaded", ()=>{
    
    const bts = document.querySelector("button") ;
      
    bts.addEventListener("click", ()=> { 
        
        let lotto_number=[];
        for(let i=0; i<7; i++){
           let num=Math.floor(Math.random()*45)+1;
           lotto_number.push(num);
        } 
        console.log(lotto_number)
    });
    
})



