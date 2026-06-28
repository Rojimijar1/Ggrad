  let btn1 = document.getElementById("myButton");
    let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copyCode");
let firstFunc = "rgb(92,145,229)";
let secondFunc = "#rgb(152,63,198)";
    const rgb1 = () =>{
         let myHexvalues = "0123456789abcdef";
    let color = "#";
    for(let i=0;i<6;i++){
        color = color+(myHexvalues[Math.floor(Math.random()*16)]); //mat.random: gives random gives random values between]
        //0-1 by multiplying it by 16 we can generate larger no than 0-1 and math .
        //floor  removes the decimal values basically .containing values        
        }
         return color;
    }

    //Button1
    const handleButton1 = () =>{
         firstFunc = rgb1();
        console.log(firstFunc);
        document.body.style.backgroundImage = `linear-gradient(to right top, ${firstFunc}, ${secondFunc})`;
        copyDiv.innerHTML = `background-image: linear-gradient(to right,${firstFunc}, rgb(152,63,198));`
        btn1.innerHTML = `${firstFunc}`;
    }

    //Button2
    const handleButton2 = () =>{
         secondFunc = rgb1();
        console.log(secondFunc);
        document.body.style.backgroundImage = `linear-gradient(to right top, ${secondFunc}, ${firstFunc})`;
        copyDiv.innerHTML = `background-image: linear-gradient(to right,${firstFunc}, ${secondFunc});`
         btn2.innerHTML = `${secondFunc}`;
    }

    btn1.addEventListener("click", handleButton1);
    btn2.addEventListener("click", handleButton2);
    copyDiv.addEventListener("click", ()=>{
        navigator.clipboard.writeText(copyDiv.innerHTML);
    })
