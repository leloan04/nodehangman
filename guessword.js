var letters = require('./guessletters.js');

var word = function(displayedWord) {
    this.displayedWord = displayedWord;
    this.letterArray = this.createLetterArray();
}

word.prototype.createLetterArray = function() {
    var lettersInArray = [];
    for (var i = 0; i < this.displayedWord.length; i++) {
        lettersInArray.push(new letters(this.displayedWord[i]));
    }
    return lettersInArray;
}

word.prototype.verifyLetter = function(letter) {
    var matches = false;
    for (var i = 0; i < this.letterArray.length; i++) {
        if(letter === this.letterArray[i].getLetter()) {
            this.letterArray[i].guessed = true;
            matches = true;
        }
    }
    return matches;
}

word.prototype.wordToGuess = function() {
    var display = '';
    for (var i = 0; i < this.letterArray.length; i++) {
        display += this.letterArray[i].getDisplayLetter();
    }
    return display;
}

word.prototype.getWordToGuess = function() {
    return this.wordToGuess.toUpperCase();
}

module.exports = guessword;