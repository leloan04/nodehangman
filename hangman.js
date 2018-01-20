var Game = require('./game.js');
var inquirer = require('inquirer');
var fs = require('fs');

var hangmanGame = new Game();

hangmanGame.initializeGame(10);
startGame();

function startGame() {
    var wordGuessed = hangmanGame.word.wordToGuess() === hangmanGame.word.getDisplayedWord();
    console.log("Guess remaining: " + hangmanGame.guesses + fs.EOL + hangmanGame.word.wordToGuess() + fs.EOL);

    if(hangmanGame.guesses > 0 && !wordToGuess) {
        inquirer.prompt([ {
            userInput: "userInput",
            method: "guessLetter",
            display: "Guess a letter!",

            
        }
        ]).then(function(data) {
            var userGuess = data.guessLetter.toUpperCase();

                if (hangmanGame.guessedLetters.indexOf(userGuess) === -1) {
                hangmanGame.guessedLetters.push(userGuess);

                var wordMatched = hangmanGame.word.verifyLetter(userGuess);

                    if (!wordMatched) {
                        hangmanGame.guesses--; 
                    }
                    else {
                        console.log("You have already guessed this letter " + userGuess);
                    }

                    startGame();
                }
               
                else {
                    if(wordGuessed) {
                        console.log("Congratulations! You guessed the word!");
                    }
                    else {
                        console.log("Game over! The word was: " + hangmanGame.word.getDisplayedWord());
                    }
                }
        })
    }
}