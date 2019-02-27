# Word Guess Game

This game is a spin on a classic hangman game created using HTML, CSS, and Javascript. At the beginning of the game a picture from a country is displayed and the user must try and spell out the name of that country based on the picture. 

## Functionality

There are 5 main components in the game that are changing dynamically as the user plays the game. 

1. The win counter goes up everytime the user correctly guesses the name of the country. 

2. The current country starts off as underscores representing the length of the countries name, and as the user presses the correct keys, the underscores change to the correct letter. 

3. The user is given 12 incorrect guesses to try and guess the name. Every time an incorrect key is pressed the number goes down by 1, unless the key was previously pressed. If the number reaches 0 the game switches to the next country.

4. Every key that the user has already guessed is displayed, unless it's a duplicate.

5. Everytime the game switches to another country a new image is displayed with a caption below it saying the name of the previous country.


