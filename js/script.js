function playGame(playerInput) {
    clearMessages();

    function clearMessages() {
        document.getElementById('messages').innerHTML = '';
    }

    function printMessage(msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        document.getElementById('messages').appendChild(div);
    }

    function getMoveName(number) {
        if (number == 1) {
            return 'kamień';
        } else if (number == 2) {
            return 'nożyce';
        } else if (number == 3) {
            return 'papier';
        } else {
            return 'zła liczba';
        }
    }

    function displayResult(argComputerMove, argPlayerMove) {
        if (
            (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
            (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ||
            (argComputerMove == 'papier' && argPlayerMove == 'nożyce')
        ) {
            return 'Gracz wygrywa';
        } else if (
            (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') ||
            (argComputerMove == 'papier' && argPlayerMove == 'kamień') ||
            (argComputerMove == 'nożyce' && argPlayerMove == 'papier')
        ) {
            return 'Komputer wygrywa';
        } else if (argComputerMove == argPlayerMove) {
            return 'Remis';
        } else {
            return 'Gracz wpisał złą liczbę';
        }
    }

    // Player move
    let playerMove = getMoveName(playerInput);
    printMessage('Ruch gracza to: ' + playerMove);

    // Computer move
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    printMessage('Ruch komputera to: ' + computerMove);

    // Result
    printMessage(displayResult(computerMove, playerMove));
}

function buttonClicked(playerChoice) {
    playGame(playerChoice);
}

const playRock = document.getElementById('play-rock');
const playPaper = document.getElementById('play-paper');
const playScissors = document.getElementById('play-scissors');

if (playRock) {
    playRock.addEventListener('click', function () {
        buttonClicked(1);
    });
}

if (playPaper) {
    playPaper.addEventListener('click', function () {
        buttonClicked(3);
    });
}

if (playScissors) {
    playScissors.addEventListener('click', function () {
        buttonClicked(2);
    });
}