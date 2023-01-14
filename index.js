var rand = Math.floor(6 * Math.random()) + 1;

var randimage = "dice" + rand + ".png";

var imagesource = "images/" + randimage;

document.querySelectorAll("img")[0].setAttribute("src", imagesource);

var rand2 = Math.floor(6 * Math.random()) + 1;

var randimage2 = "dice" + rand2 + ".png";

var imagesource2 = "images/" + randimage2;

document.querySelectorAll("img")[1].setAttribute("src", imagesource2);

// Players Won?

if(rand > rand2){
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins 🚩";
} else if(rand < rand2){
    document.querySelector("h1").innerHTML = " 🏆 Player 2 Wins 🚩";
} else{
    document.querySelector("h1").innerHTML = "Draw 🚩";
}