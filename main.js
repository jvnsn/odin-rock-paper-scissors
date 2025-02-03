let humanScore = 0;
let computerScore = 0;
const MAX_SCORE = 5;

const startBtn = document.querySelector('.start-btn');
const startMenu = document.querySelector('#startMenu');
const result = document.querySelector('.result');
const score = document.querySelector('.score');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');
const game = document.querySelector('.game');
const resetBtn = document.querySelector('.reset-btn');

startBtn.onclick = () => {
    startMenu.style.display = "none";
    game.style.display = 'flex';
}

function updateScore() {
    score.textContent = `Human: ${humanScore}  -  Computer: ${computerScore}`;
}

function finalResult() {
    if (humanScore > computerScore) {
        result.textContent = "CONGRATSSS, YOU WIN!";
    } else if (humanScore < computerScore) {
        result.textContent = "YOU LOSE! BETTER LUCK NEXT TIME!";
    } else if (humanScore == computerScore) {
        result.textContent = "IT'S A TIE!"
    }
}

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
};

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    if (humanChoice ==  computerChoice) {
        result.textContent = "It's a tie!";
    } else if ((humanChoice == 'scissors' && computerChoice == 'paper') || 
                (humanChoice == 'rock' && computerChoice == 'scissors') ||
                (humanChoice == 'paper' && computerChoice == 'rock')) {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
        updateScore();
    } else {
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
        updateScore();
    }

    if (humanScore == MAX_SCORE || computerScore == MAX_SCORE) {
        finalResult();
        rockBtn.style.display = "none";
        paperBtn.style.display = "none";
        scissorBtn.style.display = "none";
        resetBtn.style.display = "flex"
    }
}

function playGame(humanChoice) {
    const humanSelection = humanChoice;
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
};

rockBtn.addEventListener("click", () => { 
    playGame("rock"); 
});

paperBtn.addEventListener("click", () => {
    playGame("paper");
});

scissorBtn.addEventListener("click", () => {
    playGame("scissor");
});

resetBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    updateScore();
    result.textContent = '';
    rockBtn.style.display = "flex";
    paperBtn.style.display = "flex";
    scissorBtn.style.display = "flex";
    resetBtn.style.display = "none";
})