var name1 = prompt("Enter 1st Player's Name : ");

var name2 = prompt("Enter 2nd Player's Name : ");

document.querySelectorAll("p")[0].innerHTML = name1;

document.querySelectorAll("p")[1].innerHTML = name2;

var rand1 = Math.floor(Math.random()*6)+1;

var randdice1 = "dice" + rand1 + ".png";

var randloc1 = "./images/" + randdice1;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randloc1);

var rand2 = Math.floor(Math.random()*6)+1;

var randdice2 = "dice" + rand2 + ".png";

var randloc2 = "./images/" + randdice2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randloc2);

// var ref = document.querySelector("h1").innerHTML;

if(rand1 > rand2){
    document.querySelector("h1").innerHTML = name1 + " Wins !";
}
else if(rand1 < rand2){
    document.querySelector("h1").innerHTML = name2 + " wins !";
}
else{
    document.querySelector("h1").innerHTML = "Draw !!!";
}
