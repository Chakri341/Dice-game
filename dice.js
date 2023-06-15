var randnumber = Math.floor(Math.random()*6)+1;//1-6
var randdiceimg="dice" + randnumber+".png"; // dice1-dice6.png
var rdmimgsrc="images/"+randdiceimg; //images/dice1.png-images/dice6.png
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",rdmimgsrc);


var rndnum2=Math.floor(Math.random()*6)+1;
var rdmsrc="images/dice"+rndnum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",rdmsrc);


if(randnumber>rndnum2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(randnumber<rndnum2){
    document.querySelector("h1").innerHTML="Player 2 won!";
}
else{
    document.querySelector("h1").innerHTML="Match Draw !";
}