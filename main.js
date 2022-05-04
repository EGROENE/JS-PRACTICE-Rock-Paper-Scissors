// User choice, including 'bomb' as a cheatcode:
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Please enter either "rock", "paper", or "scissors".');
    }
  };
  
  // Computer choice:
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return 'rock';
    } else if (randomNumber === 1) {
      return 'paper';
    } else {
      return 'scissors';
    }
  };
  
  // Determine winner:
  const determineWinner = (userChoice, computerChoice) => {
    // If a tie
    if (userChoice === computerChoice) {
      return 'It\'s a tie.';
    }
  
    // If user throws bomb:
    if (userChoice === 'bomb') {
      return 'The human wins in a blowout!';
    }
    // If user throws rock:
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The machine wins.';
      } else {
        return 'The human wins.';
      }
    }
    // If user throws paper:
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The machine wins.';
      } else {
        return 'The human wins.';
      }
    }
    // If user throws scissors:
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The machine wins.';
      } else {
        return 'The human wins.';
      }
    }
  }
  
  // Let's play!
  const PLAY_GAME = () => {
    let userChoice = getUserChoice('bomb'); // Change user input here
    let computerChoice = getComputerChoice();
    console.log(`The human throws ${userChoice}.`);
    console.log(`The machine throws ${computerChoice}.`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  PLAY_GAME();