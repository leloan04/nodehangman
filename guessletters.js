var letters = function(letter) {
    this.letter = letter.toUpperCase();
    this.placeholder = '_';
    this.lettersGuessed = false;
}

letters.prototype.getDisplayLetter = function() {
    var lets = "";
    
    if(this.lettersGuessed) {
        lets = this.letter;
    }
    else {
        lets = this.placeholder;
    }
    return lets;
}

letters.prototype.getLetter = function() {
    return this.letter;
}

module.exports = guessletters;