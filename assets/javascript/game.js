//Word Guess Game

//Wins, guesses, and x variables
var wins = 0;
var guessesRemaining = 12;
var x = 0;

//Arrays
var countryLetters = [];
var lettersGuessed = [];
var correctLetters = [];
var countries = ["AUSTRALIA", "GERMANY", "BRAZIL", "MEXICO", "MADAGASCAR", "PERU", "RUSSIA", "ITALY"];
var pictures = ["assets/images/australia.jpg", "assets/images/germany.jpg", "assets/images/brazil.jpg", "assets/images/mexico.jpg", "assets/images/madagascar.jpg", "assets/images/peru.jpg", "assets/images/russia.jpg", "assets/images/italy.jpg"];

//Selects current country that user is guessing
var currentCountry = countries[x];


// Sets correctLetters array equal to "_", for the length of currentCountry
var createPlaceholder = function () {

    for (i = 0; i < currentCountry.length; i++) {
        correctLetters[i] = "_";
    }
}

//Grabs containers from HTML
var winsText = document.getElementById("wins");
var placeholderText = document.getElementById("placeholder");
var guessesRemainingText = document.getElementById("guessesRemaining");
var lettersGuessedText = document.getElementById("lettersGuessed");
var imageContainer = document.getElementById("imageContainer");
var pictureCaption = document.getElementById("pictureCaption");

//Displays content inside containers
var pageContent = function () {
    winsText.textContent = wins;
    placeholderText.textContent = correctLetters.join(" ");
    guessesRemainingText.textContent = guessesRemaining;
    lettersGuessedText.textContent = lettersGuessed.join(" ");
}

//Splits the current value of currentBand into seperate letters
var splitCountry = function () {
    countryLetters = currentCountry.split("");
}

//Set the image for currentCountry
var setImage = function () {
    var newImg = document.createElement("img");
    newImg.setAttribute("src", pictures[x]);
    newImg.setAttribute("class", "rounded");
    newImg.setAttribute("id", "remove")
    newImg.setAttribute("alt", "???")
    imageContainer.appendChild(newImg);

    if (x > 0) {
        pictureCaption.innerHTML = "That last country was " + countries[x - 1] + "!";
    }
}


//Change to the next country
var nextWord = function () {
    x++

    //Checks to see if user finished the game, resets it if they did 
    if (x > countries.length - 1) {
        x = 0;
        pictureCaption.innerHTML = "You finished the game! If you missed some try giving it another go."
        wins = 0;
    }

    guessesRemaining = 12;
    currentCountry = countries[x];
    lettersGuessed = [];
    correctLetters = [];
    imageContainer.removeChild(document.getElementById("remove"));
    createPlaceholder();
    splitCountry();
    setImage();
};


createPlaceholder();
setImage();
splitCountry();
pageContent();

//Takes users key input and tests it to see if it matches the correct word.
document.onkeyup = function (event) {

    var letter = event.key.toUpperCase();


    for (i = 0; i < countryLetters.length; i++) {
        if (countryLetters[i] === letter) {

            correctLetters[i] = countryLetters[i];
        }
    }

    if (lettersGuessed.indexOf(letter) === -1) {
        guessesRemaining--;

        if (countryLetters.indexOf(letter) !== -1) {
            guessesRemaining++;
        }
    }

    if (lettersGuessed.indexOf(letter) === -1) {
        lettersGuessed.push(letter);
    }

    if (correctLetters.indexOf("_") === -1) {
        wins++;
        nextWord();
    }

    if (guessesRemaining === 0) {
        nextWord();
    }

    pageContent();

}