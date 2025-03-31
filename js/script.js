function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

//Player move//

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);
let playerMove = 'nieznany ruch';
if(playerInput == 1){
  playerMove = 'kamień';
} else if(playerInput == 2){
   playerMove = 'nożyce';
} else if(playerInput == 3){
   playerMove = 'papier';	
}
printMessage('Ruch gracza to: ' + playerMove);

//computer move//

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = 'nieznany ruch';
if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
   computerMove = 'nożyce';
} else if(randomNumber == 3){
   computerMove = 'papier';	
}
printMessage('Ruch komputera to: ' + computerMove);

if (computerMove == 'kamień' && playerMove =='papier'){
	printMessage('Gracz wygrywa');	
} else if(computerMove == 'nożyce' && playerMove =='kamień'){
	printMessage('Gracz wygrywa');
} else if(computerMove == 'papier' && playerMove =='nożyce'){
	printMessage('Gracz wygrywa');
} else if(computerMove == 'kamień' && playerMove =='nożyce'){
	printMessage('Komputer wygrywa');
} else if(computerMove == 'papier' && playerMove =='kamień'){
	printMessage('Komputer wygrywa');
} else if(computerMove == 'nożyce' && playerMove =='papier'){
	printMessage('Komputer wygrywa');
} else if(computerMove == playerMove){
	printMessage('remis');
} else {
	printMessage('gracz wpisał złą liczbę')
}

