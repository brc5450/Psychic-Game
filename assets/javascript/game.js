
    // Creates an array that lists out all of the options (a-z).
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // Creating variables to hold the number of wins, losses, guesses left and guesses picked. They start at 0.
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = [];


    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      guessesSoFar.push(userGuess);

      // Reworked our code from last step to use "else if" instead of lots of if statements.

      // This logic determines the outcome of the game (win/loss/guesses,guesses ), and increments the appropriate number
      if (userGuess == computerGuess) {
        wins++;
    guessesLeft = 9; //reseting the guesses back to 9 so that the user can play again
        guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
    }
    else if (guessesLeft == 0){
        losses++;
    guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess){
        guessesLeft--; //decrementing the guesses left
    }
        // Creating a variable to hold new HTML. HTML now keeps track of the user and computer guesses, and wins/losses/guesses left/guesses so far.
        var html = "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of ?</p>" +
        "<p>Total Wins: " +
        wins +
        "</p>" +
        "<p>Total Losses: " +
        losses +
        "</p>" +
        "<p>Guesses Left: " +
        guessesLeft +
        "</p>" +
        "<p>Your Guesses So Far: " +
        guessesSoFar +
        "</p>"
        ;

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector('#game').innerHTML = html;
      }
    
      

