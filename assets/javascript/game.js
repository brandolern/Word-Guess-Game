var wins = 0;
var guessesRemaining = 13;
var lettersGuessed = [];

var bands = ["STRING1", "STRING2", "OTHER-STRING", "LAST-STRING"];

var currentBand = bands[0];

var winsText = document.getElementById("wins");
var placeholderText = document.getElementById("placeholder");
var guessesRemainingText = document.getElementById("guessesRemaining");
var lettersGuessedText = document.getElementById("lettersGuessed");

document.onkeyup = function (event) {

    var letter = event.key.toUpperCase();

    lettersGuessed.push(" " + letter)
    console.log(lettersGuessed);
}


//Create function that will switch picture and word when user loses or wins
//Create function that will capture user key inputs