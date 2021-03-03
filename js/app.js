// Game helper functions

// 1. computer play

function computerPlay()
{
	options = ['rock','paper','scissors'];
	choice = Math.floor(Math.random() * 3);
	result = options[choice];
	return result;  
}
