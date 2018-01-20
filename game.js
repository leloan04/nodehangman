var words = require('./words.js');
var wordsToGuess = ['Spring', 'Winter', 'Summer', 'Fall', 'Snow', 'Leaves', 'Flowers', "Beaches", "Sunsets", "Blizzard"];
var Game = function() {
    this.word;
    this.guesses = 0;
    this.guessedLetters = [];
}

Game.prototype.wordGenerator = function() {
    var randomWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
}

Game.prototype.initializeGame = function(guesses) {
    this.word = this.wordGenerator();
    this.guesses = guesses;
    this.guessedLetters = [];
    console.log("Good Luck!");
}

module.exports = game;