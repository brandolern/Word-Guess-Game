//Word Guess Game

//Wins, guesses, and x variables
var wins = 0;
var guessesRemaining = 13;
var x = 0;

//Arrays
var bandLetters = [];
var lettersGuessed = [];
var correctLetters = [];
var bands = ["STRING1", "HELLO", "OTHER-STRING", "LAST-STRING"];

//Selects current band that user is guessing
var currentBand = bands[x];


// Sets correctLetters array equal to "_", for the length of currentBand
var createPlaceholder = function () {
    for (i = 0; i < currentBand.length; i++) {
        correctLetters[i] = "_";
    }
}
createPlaceholder();
//Grabs containers from HTML
var winsText = document.getElementById("wins");
var placeholderText = document.getElementById("placeholder");
var guessesRemainingText = document.getElementById("guessesRemaining");
var lettersGuessedText = document.getElementById("lettersGuessed");

//Displays content inside containers
var pageContent = function () {
    winsText.textContent = wins;
    placeholderText.textContent = correctLetters.join(" ");
    guessesRemainingText.textContent = guessesRemaining;
    lettersGuessedText.textContent = lettersGuessed.join(" ");
}

//Splits the current value of currentBand into seperate letters
var splitBand = function () {
    bandLetters = currentBand.split("");
}

//Change to the next band
var nextWord = function () {
    x++;
    guessesRemaining = 13;
    currentBand = bands[x];
    lettersGuessed = [];
    correctLetters = [];
    createPlaceholder();
    splitBand();
};


splitBand();
pageContent();

document.onkeyup = function (event) {

    var letter = event.key.toUpperCase();



    for (i = 0; i < bandLetters.length; i++) {
        if (bandLetters[i] === letter) {

            correctLetters[i] = bandLetters[i];
        }
    }



    if (lettersGuessed.indexOf(letter) === -1) {
        guessesRemaining--;
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


//Create function that will switch picture and word when user loses or wins