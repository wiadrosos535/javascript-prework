function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(number){
	if(number == 1){
		number = 'kamień';
		return	number;
	  } else if(number == 2){
		 number = 'nożyce';
		 return	number;
	  } else if(number == 3){
		 number = 'papier';
		 return	number;
	  }	else{
		 number = 'zła liczba';
		 return number;
	  }
}

function displayResult(argComputerMove, argPlayerMove){
	if (argComputerMove == 'kamień' && argPlayerMove =='papier'){
		return 'Gracz wygrywa';	
	} else if(argComputerMove == 'nożyce' && argPlayerMove =='kamień'){
		return 'Gracz wygrywa';
	} else if(argComputerMove == 'papier' && argPlayerMove =='nożyce'){
		return 'Gracz wygrywa';
	} else if(argComputerMove == 'kamień' && argPlayerMove =='nożyce'){
		return 'Komputer wygrywa';
	} else if(argComputerMove == 'papier' && argPlayerMove =='kamień'){
		return 'Komputer wygrywa';
	} else if(argComputerMove == 'nożyce' && argPlayerMove =='papier'){
		return 'Komputer wygrywa';
	} else if(argComputerMove == argPlayerMove){
		return 'remis';
	} else{
		return 'gracz wpisał złą liczbę';
	}
}
//Player move//

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);
let playerMove = getMoveName(playerInput);

printMessage('Ruch gracza to: ' + playerMove);

//computer move//

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);

printMessage('Ruch komputera to: ' + computerMove);

//Result//

printMessage(displayResult(computerMove, playerMove));

