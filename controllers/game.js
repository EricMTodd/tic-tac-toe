const gameController = (() => {
  let storageObject = JSON.parse(localStorage.ticTacToe);
  let occupiedCells = [];
  let markedCell = "";

  const setInitiative = () => {
    console.log("Setting initiative...");
    const initiative = Math.random() < 0.5;
    return initiative;
  };

  const markCell = (e) => {
    // Logic for marking a cell based on current turn    

    if (occupiedCells.length > 0) {
      for (let i = 0; i < occupiedCells.length; i++) {
        if (occupiedCells[i].id === e.target.id) {
          return alert("This space is already occupied.");
        };
      };
    };

    if (storageObject.activeGame.currentTurn % 2 !== 0) {
      markedCell.innerText = "";
      markedCell = e.target;
      markedCell.innerText = "X";
    } else {
      markedCell.innerText = "";
      markedCell = e.target;
      markedCell.innerText = "O";
    };

    return markedCell;
    // End of markCell function
  };

  const endTurn = () => {
    occupiedCells.push(markedCell);
    console.log(occupiedCells);
    markedCell = "";
    storageObject.activeGame.currentTurn++;
    console.log(storageObject.activeGame.currentTurn);
    let storageString = JSON.stringify(storageObject);
    localStorage.setItem("ticTacToe", storageString);
  };

  const instantiateNewGame = (() => {
    console.log("Instantiating new game...");
    const newGame = Object.create(gameObjectModel);
    newGame.currentTurn = gameObjectModel.currentTurn;
    newGame.initiative = setInitiative();

    if (newGame.initiative === true) {
      console.log(`${storageObject.activePlayerOne.name} goes first`);
      newGame.oddTurns = storageObject.activePlayerOne;
      newGame.evenTurns = storageObject.activePlayerTwo;

    } else {
      console.log(`${storageObject.activePlayerTwo.name} goes first`);
      newGame.oddTurns = storageObject.activePlayerTwo;
      newGame.evenTurns = storageObject.activePlayerOne;
      // End of if else
    };

    storageObject.activeGame = newGame;
    storageObject.activeGame.currentTurn++;
    let storageString = JSON.stringify(storageObject);
    localStorage.setItem("ticTacToe", storageString);

    return console.log(newGame);
    // End of instantiateGameFunction
  })();



  const renderGameBoard = (() => {
    // Redirect
    let gameBoard = document.querySelector("#game-board-container");
    let rowNumber = 0;

    const createRow = () => {
      rowNumber++;
      let row = document.createElement("div");
      row.id = `row-${rowNumber}`;
      row.className = "row";
      gameBoard.appendChild(row);
    };

    const createCell = (i) => {
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.id = `cell-${i + 1}`;
      cell.addEventListener("click", (e) => {markCell(e)});
      let currentRow = document.querySelector(`#row-${rowNumber}`);
      currentRow.appendChild(cell);
    };

    // Render grid cells
    for (let i = 0; i < 9; i++) {
      if (i % 3 === 0) {
        createRow();
        createCell(i);
      } else {
        createCell(i);
        // End if statement
      };
      // End for loop
    };
    // End of renderGameBoard function
  })();



  return {
    endTurn,
    markCell,
    // renderGameBoard,
    // setInitiative,
  };
})();