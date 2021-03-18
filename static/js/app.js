/**
 * A script responsible for managing  the game of 
 * Rock Paper Scissors 
 *  
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 * @author Mohamed El-Khouly <msirag95@gmail.com>
*/

/**
 * Define Global Variables
 *
*/
const pregameSection = document.getElementById('pre-game'),
	gameSection = document.getElementById('game'),
	startBtn = document.getElementById("start-btn"),
	playerScoreView = document.querySelector(".player-score span"),
	computerScoreView = document.querySelector(".computer-score span"),
	infoView = document.querySelector(".info"),
	playerBtns = document.querySelectorAll('.player-choice button');

let computerScore = 0,
	computerSelection = '',
	playerScore = 0,
	playerSelection = '';

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// 1. computer choice
function computerPlay() {
	options = ['rock', 'paper', 'scissors'];
	choice = Math.floor(Math.random() * 3);
	result = options[choice];
	return result;
}

//2. One Round result
function roundWinner(playerSelection, computerSelection) {
	// check for tie 
	if (playerSelection === computerSelection) {
		return 'Tie';
	}
	else {
		// check player selection
		switch (playerSelection) {
			case 'rock':
				return (computerSelection == 'scissors') ? 'player' : 'computer';
				break;
			case 'paper':
				return (computerSelection == 'rock') ? 'player' : 'computer';
				break;
			case 'scissors':
				return (computerSelection == 'paper') ? 'player' : 'computer';
				break;
		}
	}
}

// 3. display scores 
function displayScores() {
	computerScoreView.textContent = computerScore;
	playerScoreView.textContent = playerScore;
}

// 4. GameOver
function gameOver() {
	if ((playerScore !== 5) && (computerScore !== 5)) return; // if no one reached 5
	playerBtns.forEach(btn => {
		btn.removeEventListener('click', playRound);
	});
	const winner = playerScore === 5 ? 'PLAYER' : 'Computer';
	const result = document.querySelector('.result');
	result.innerHTML = `<h3>${winner} WINS</h3>`;
	pregameSection.classList.remove('hidden');
	gameSection.classList.add('hidden');
}
/**
 * End Helper Functions
 * Begin Main Functions
*/

// One round function 
function playRound() {
	this.classList.add('selection');
	playerSelection = this.dataset.choice;
	computerSelection = computerPlay();
	const computerBtn = document.querySelector(`.computer-choice button[data-choice=${computerSelection}]`);
	computerBtn.classList.add('selection');
	result = roundWinner(playerSelection, computerSelection);
	if (result === 'player') {
		playerScore++;
		infoView.textContent = `${playerSelection} beats ${computerSelection}`;
	} else if (result === 'computer') {
		computerScore++;
		infoView.textContent = `${computerSelection} beats ${playerSelection}`;
	} else {
		infoView.textContent = "A Tie";
	}
	displayScores();
	setTimeout(() => {
		this.classList.remove('selection');
		computerBtn.classList.remove('selection');
	}, 1000);
	gameOver();
}

/**
 * End Main Functions
 * Begin Events
 *
*/


/**
 *  Starting game event 
 * hides the pregame setup and 
 * starts the game.
 */

startBtn.onclick = function (e) {
	pregameSection.classList.add('hidden');
	gameSection.classList.remove('hidden');
	playerScore = 0;
	computerScore = 0;
	displayScores();
	playerBtns.forEach(btn => {
		btn.addEventListener('click', playRound);
	});
};

