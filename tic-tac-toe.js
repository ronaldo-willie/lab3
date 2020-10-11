"use strict";


window.onload = function addClassName(){
	let currentPlayer = "X"
	let elem = document.querySelectorAll("#board div");

	for (let i=0; i < elem.length; i++){
		elem[i].classList.add("square");
		elem[i].addEventListener('click', function(){
			console.log('Square' + i + "clicked");
			elem[i].innerHTML = currentPlayer;
			changePlayer();
		});
	}

	var statusDisplay = document.querySelector("#status");
	let gameActive = true;

	let gameState = ["", "","", "", "", "","", "", ""];
	const winningMessage = () => `Player ${currentPlayer} has won!`;
	const clickBox = elem.target;
	const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
	statusDisplay.innerHTML = currentPlayerTurn();

	function handleCellPlayed(){

	}

	function changePlayer(){
		
	}
	function handleResultValidation(){

	}
	function handleCellClick(){

	}

/*	if (box.target.textContent ==='X'){
		box.target.classList.add("X");
	}else{
		box.target.classList.add("O");
	}
*/
/*	function addx(elem){
		board.className.add("X")
		board.textContent = 'X'
	}	

	function addo(board){
		board.className.add("O")
		board.textContent = "O"
	}
	function colour(elem){
		let nullelem = [ [],[],[],[],[],[],[],[],[] ];

		for(var x = 0; x < elem.length; x++){
			elem[x].addEventListener("click", 
			function(){
				addx(this);
				console.log('clicked')
			});
		}
	}*/
	function changePlayer(){
		currentPlayer = currentPlayer ==="X" ? "O" : "X";
		statusDisplay.innerHTML = currentPlayerTurn();
	}

	function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
      clickedCell.getElementById("elem").children
    );
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }    
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

	function handleCellPlayed(clickedCell, clickedCellIndex) {
    	gameState[clickedCellIndex] = currentPlayer;
    	clickedCell.innerHTML = currentPlayer;
	}

	const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
	function handleResultValidation() {
    let roundWon = false;
    const winningMessage = () => `Player ${currentPlayer} has won!`;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
	if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
	}



}