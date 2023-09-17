let numberLst = document.getElementsByClassName("number");
let rotate = 0;
for (let i of numberLst) {
    i.style.transform = `rotate(${rotate.toString()}deg)`;
    let p = i.querySelector("p");
    p.style.transform = `rotate(${-rotate.toString()}deg)`;

    rotate += 30;

}

function setSec() {
    let now = new Date();
    let sec = now.getSeconds();
    let min = now.getMinutes();
    let hr = now.getHours();
    let degS = sec*6;
    let degM = min*6;
    if (hr >12) hr -= 12;
    let degH = hr*30;
    let secHand = document.getElementById("sec");
    let minHand = document.getElementById("min");
    let hrHand = document.getElementById("hour");

    secHand.style.transform = `rotate(${degS.toString()}deg) translateY(-2.5rem)`;
    minHand.style.transform = `rotate(${(degM + degS/60).toString()}deg) translateY(-2.5rem)`;
    hrHand.style.transform = `rotate(${(degH + degM/12).toString()}deg) translateY(-2.5rem)`;



}


setInterval(setSec, 100);
