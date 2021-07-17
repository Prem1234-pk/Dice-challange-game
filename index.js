alert("Are you excited to get a new number");
setInterval(() => {
random1 = Math.floor(Math.random()*6)+1;

var randomImageSource1 = "images/dice" + random1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);



var random2 = Math.floor(Math.random()*6)+1;

var randomImageSource2= "images/dice" + random2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (random1 > random2) {
    document.querySelectorAll("h1")[0].innerHTML="player1 wins";
  } else if (random1 < random2) {
    document.querySelectorAll("h1")[0].innerHTML="player2 wins";
  } else {
    document.querySelectorAll("h1")[0].innerHTML="Draw";
  }
},5000);
