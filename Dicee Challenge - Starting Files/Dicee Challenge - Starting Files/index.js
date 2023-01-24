var random1= Math.floor((Math.random()*6)+1);
var randomImgSource1 ="images/dice"+random1+".png";
document.querySelector(".container .dice1 .img1").setAttribute("src",randomImgSource1);
var random2= Math.floor((Math.random()*6)+1);
var randomImgSource2 ="images/dice"+random2+".png";
var image2=document.querySelector(".container .dice2 .img2").setAttribute("src",randomImgSource2);;
if (random1===random2){
    document.querySelector(".container h1").textContent="DRAW";
}
else if (random1>random2){
    document.querySelector(".container h1").textContent="🚩PLAYER 1 WINS";
}
else if(random1<random2){
    document.querySelector(".container h1").textContent="PLAYER 2 WINS 🚩";
}
