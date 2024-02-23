
const handleClick =() => {
const bts = document.querySelectorALL("img");

    bts.forEach((item) => { 
        const randomNum1 = Math.floor(Math.random()*6)+1;
        item.setAttribute("src",`./img/${randomNum1}.png`);

        console.log("click",randomNum1)
   
        });
}


