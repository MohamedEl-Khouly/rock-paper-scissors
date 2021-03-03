// Game helper functions

// 1. computer play

function computerPlay()
{
	options = ['rock','paper','scissors'];
	choice = Math.floor(Math.random() * 3);
	result = options[choice];
	return result;  
}

// 2. user Play

function userPlay(){
	let choice = prompt('player turn\n enter \n rock, paper or scissors');
	return choice.toLowerCase()
}

// 3. play round

function playRound(playerSelection , computerSelection ){
	// check for tie 
	if (playerSelection === computerSelection){
		return 'Tie';
	}
	else{
		// check player selection
		switch(playerSelection){
			case 'rock':
				return (computerSelection =='scissors')? 'player win':'computer win';
				break;
			case 'paper':
				return (computerSelection =='rock')? 'player win':'computer win';
				break;
			case 'scissors':
				return (computerSelection =='paper')? 'player win':'computer win';
				break;
		}
	}
}

console.log(playRound(userPlay(),computerPlay()));