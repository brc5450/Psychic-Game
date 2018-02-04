
    // Creates an array that lists out all of the options (a-z).
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = [];


    // Function is ran on keypress.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

      // Randomly chooses a letter from the array.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      guessesSoFar.push(userGuess);
      
      if (userGuess == computerGuess) {
        wins++;
    guessesLeft = 9; 
        guessesSoFar.length = 0; 
    }
    else if (guessesLeft == 0){
        losses++;
    guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess){
        guessesLeft--; 
    }
        
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

        
        document.querySelector('#game').innerHTML = html;
      }
    
      

