function Hangman(word) {
    console.log("The Game starts! New word is in Game ")
    word = word.toLowerCase();
    guessed = new Array(word.length).fill("_");
    guessedStr = "";
    errors = 6;
    gets = 0;
    wrong = [];
    letter = "";
    isCorrect = false;
    return {

        startAgain: function () {
            console.log("You've got an extra chance!");
            word = word.toLowerCase();
            guessed = new Array(word.length).fill("_");
            guessedStr = "";
            errors = 6;
            gets = 0;
            wrong = [];
            letter = "";
            isCorrect = false;
        },

        guess: function (letter) {

            if (errors > 0) {
                isCorrect = false;
                for (var i = 0; i < word.length; i++) {
                    if (word[i] == letter) {
                        guessed[i] = letter;
                        isCorrect = true;
                        gets++;
                    };
                };

                if (!isCorrect) {
                    errors--;
                    wrong.unshift(letter);
                    console.log(this.getWrongSymbols());
                } else {
                    console.log(letter + " is correct");
                };
                guessedStr = (guessed.join(""));
            };

            if (errors <= 0) {
                console.log("Game Over!");
                return this
            };

            if (gets == (word.length)) {
                console.log("You win!");
                return this
            };

            return this;
        },

        getErrorsLeft: function () {
            return errors;
        },

        getGuessedString: function () {
            return guessedStr;
        },

        getStatus: function () {
            return ("Your progress : " + guessedStr + " | errors left " + errors);
        },
        getWrongSymbols: function () {
            return ("Wrong sybols : " + wrong);
        }
    };
};


//gameplay winning scenario
var hangman = new Hangman("LALABLA");
hangman.guess('l')
    .guess('s')
    .guess('u')
    .guess('a')
    .guess('w')
    .guess('k')
    .guess('t')
    .guess("b");
console.log(hangman.getStatus())

//gameplay loosing scenario
var hangman = new Hangman("LALABLA");
hangman.guess('l')
    .guess('s')
    .guess('u')
    .guess('a')
    .guess('w')
    .guess('k')
    .guess('t')
    .guess("h");
console.log(hangman.getStatus())

// methods testing
hangman.startAgain();
hangman.guess('f');
hangman.guess('a');
console.log("getGuessedString " + hangman.getGuessedString());
console.log("getErrorsLeft " + hangman.getErrorsLeft());
console.log("getWrongSymbols " + hangman.getWrongSymbols());
console.log("getStatus " + hangman.getStatus());
