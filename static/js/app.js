// Game helper functions

// 1. computer play

function computerPlay() {
	options = ['rock', 'paper', 'scissors'];
	choice = Math.floor(Math.random() * 3);
	result = options[choice];
	return result;
}

// 2. user Play

function userPlay() {
	let choice = prompt('player turn\n enter \n rock, paper or scissors');
	return choice.toLowerCase()
}

// 3. play round

function playRound(playerSelection, computerSelection) {
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

// Main function
function game() {
	let playerScore = 0;
	let computerScore = 0;
	for (let i = 0; i < 5; i++) {
		let computerSelection = computerPlay();
		let playerSelection = userPlay();
		roundResult = playRound(playerSelection, computerSelection);
		if (roundResult === 'player') {
			playerScore++;
			console.log("You win")
			console.log(`${playerSelection} beats ${computerSelection}`)
		} else if (roundResult === 'computer') {
			computerScore++;
			console.log("You Lose")
			console.log(`${computerSelection} beats ${playerSelection}`)
		} else {
			console.log("Its a tie")
			console.log(`${playerSelection} equals ${computerSelection}`)
		}
		console.log(`player : ${playerScore}\ncomputer : ${computerScore}`);
	}
}

//###################################################################################################
const startBtn = document.getElementById("start-btn");
const pregameSection = document.getElementById('pre-game');
const gameSection = document.getElementById('game');
startBtn.onclick = function (e) {
	pregameSection.classList.add('hidden');
	gameSection.classList.remove('hidden');
};