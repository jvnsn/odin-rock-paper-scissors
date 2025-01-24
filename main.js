let humanScore, computerScore = 0;

function getComputerChoice() {
    let rndm = Math.floor(Math.random() * 3);
    let answer;
    if (rndm == 0) {
        answer = "rock";
    } else if (rndm == 1) {
        answer = "paper";
    } else {
        answer = "scissors";
    }
    return answer;
}

function getHumanChoice() {
    let input = prompt("Please enter your choice: ");
    return input;
}

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    if (humanChoice ==  computerChoice) {
        console.log("It's a tie!");
    } else if ((humanChoice == 'scissors' && computerChoice == 'paper') || 
                (humanChoice == 'rock' && computerChoice == 'scissors') ||
                (humanChoice == 'paper' && computerChoice == 'rock')) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
}





