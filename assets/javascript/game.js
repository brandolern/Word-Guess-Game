var wins = 0;
var guessesRemaining = 13;
var lettersGuessed = [];
var placeholder = "_ ";

var bands = ["STRING1", "STRING2", "OTHER-STRING", "LAST-STRING"];

var x = 0;
var currentBand = bands[x];

var winsText = document.getElementById("wins");
var placeholderText = document.getElementById("placeholder");
var guessesRemainingText = document.getElementById("guessesRemaining");
var lettersGuessedText = document.getElementById("lettersGuessed");

var pageContent = function () {
    winsText.textContent = wins;
    placeholderText.textContent = placeholder.repeat(currentBand.length);
    guessesRemainingText.textContent = guessesRemaining;
    lettersGuessedText.textContent = lettersGuessed;
}

pageContent();

var changeWord = function () {
    var x = 1;

};

document.onkeyup = function (event) {

    var letter = event.key.toUpperCase();


    if (lettersGuessed.indexOf(" " + letter) === -1) {
        lettersGuessed.push(" " + letter);
        console.log(letter)
        console.log(lettersGuessed)
    }

    pageContent();

}


//Create function that will switch picture and word when user loses or wins
//Create function that will capture user key inputs