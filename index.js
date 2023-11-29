function rollDice () {

var randnum_1 = Math.random();
randnum_1 = Math.floor(randnum_1*6)+1;


var randnum_2 = Math.random();
randnum_2 = Math.floor(randnum_2*6)+1;


var randomDiceImage = "dice" + randnum_1 + ".png";

var randomImageSource = "./images/" + randomDiceImage; 

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


var randomDiceImage = "dice" + randnum_2 + ".png";

var randomImageSource = "./images/" + randomDiceImage; 

var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImageSource);

if(randnum_1> randnum_2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}

if(randnum_1 < randnum_2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}

else {
    if(randnum_1 === randnum_2) {
        document.querySelector("h1").innerHTML = "Draw";
    }
    
}

}

 if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
}


