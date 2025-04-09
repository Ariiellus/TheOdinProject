const Rock = 1;
const Paper = 2;
const Scissors = 3;

const options = document.querySelectorAll('.option');
let humanChoice;

options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(b => b.classList.remove('selected'));
    option.classList.add('selected');
    humanChoice = getHumanChoice(option.id);
    playGame(humanChoice);
  });
});

function getHumanChoice(choice) {
  if (choice === 'Rock') {
    return Rock;
  } else if (choice === 'Paper') {
    return Paper;
  } else if (choice === 'Scissors') {
    return Scissors;
  }
}

function getComputerChoice() {
  // If user has selected an option, return a random number between 1 and 3
  if (humanChoice) {
    return Math.floor(Math.random() * 3) + 1;
  } else {
    return null;
  }
}

function playGame(humanChoice) {
  const computerChoice = getComputerChoice();
  if (computerChoice === null) {
    document.getElementById('Result').innerText = "Please select an option";
    updateImage(null); 
    return;
  }

  let result;
  if (humanChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (humanChoice === Rock && computerChoice === Scissors) ||
    (humanChoice === Paper && computerChoice === Rock) ||
    (humanChoice === Scissors && computerChoice === Paper)) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  let humanChoiceName;
  if (humanChoice === 1) {
    humanChoiceName = 'Rock';
  } else if (humanChoice === 2) {
    humanChoiceName = 'Paper';
  } else if (humanChoice === 3) {
    humanChoiceName = 'Scissors';
  }

  let computerChoiceName;
  if (computerChoice === 1) {
    computerChoiceName = 'Rock';
  } else if (computerChoice === 2) {
    computerChoiceName = 'Paper';
  } else if (computerChoice === 3) {
    computerChoiceName = 'Scissors';
  }

  document.getElementById('Result').innerText = result;
  console.log(humanChoiceName, 'vs', computerChoiceName, "=", result);
  updateImage(computerChoice); 
}

function updateImage(computerChoice) {
  const computerBox = document.querySelector('.ComputerBox .optionBox img');
  if (computerChoice) {
    if (computerChoice === Rock) {
      computerBox.src = 'assets/rock.png';
      computerBox.alt = 'rock';
    } else if (computerChoice === Paper) {
      computerBox.src = 'assets/paper.png';
      computerBox.alt = 'paper';
    } else if (computerChoice === Scissors) {
      computerBox.src = 'assets/scissors.png';
      computerBox.alt = 'scissors';
    }
  } else {
    computerBox.src = 'assets/Question.png';
    computerBox.alt = 'Question';
  }
}