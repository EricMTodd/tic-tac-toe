const gameController = (() => {
  let storageObject = JSON.parse(localStorage.ticTacToe);
  let occupiedCells = [];
  let markedCell = "";
  let gameOver = false;

  const setInitiative = () => {
    const initiative = Math.random() < 0.5;
    return initiative;
  };

  const markCell = (e) => {
    // Logic for marking a cell based on current turn    
    if (gameOver === true) {
      return;
    };

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

  const computerMark = () => {
    console.log("Computer's turn")
    let randomNumber = Math.floor(Math.random() * 9) + 1
    console.log(`randomNumber: ${randomNumber}`)
    if (document.querySelector(`#cell-${randomNumber}`).innerText !== "") {
      console.log("Space is occupied");
      setTimeout(computerMark, 3000)
    } else {
      console.log("Space is not occupied")
      if (storageObject.activeGame.oddTurns.name === "Computer") {
       document.querySelector(`#cell-${randomNumber}`).innerText = "X"
      } else {
       document.querySelector(`#cell-${randomNumber}`).innerText = "0"
      }
      return evaluateMarks()
    }
    // End of computerMark function
  }

  const assignWin = (cell) => {
    let endTurnButton = document.querySelector("#end-turn-button");
    gameOver = true;

    if (cell.innerText === "X") {
      endTurnButton.disabled = true;
      document.querySelector("#gameboard-turn-indicator").innerText = `${storageObject.activeGame.oddTurns.name} is the winner!`;
      for (let i = 0; i < storageObject.usersList.length; i++) {
        if (storageObject.activeGame.oddTurns.email === storageObject.usersList[i].email) {
          storageObject.usersList[i].wins++;
        };
      };
      if (storageObject.activeGame.oddTurns.email === storageObject.activePlayerOne.email) {
        storageObject.activePlayerOne.wins++;
      } else {
        storageObject.activePlayerTwo.wins++;
      };
    } else {
      endTurnButton.disabled = true;
      document.querySelector("#gameboard-turn-indicator").innerText = `${storageObject.activeGame.evenTurns.name} is the winner!`;
      for (let i = 0; i < storageObject.usersList.length; i++) {
        if (storageObject.activeGame.evenTurns.email === storageObject.usersList[i].email) {
          storageObject.usersList[i].wins++
        };
      };
      if (storageObject.activeGame.evenTurns.email === storageObject.activePlayerOne.email) {
        storageObject.activePlayerOne.wins++;
      } else {
        storageObject.activePlayerTwo.wins++;
      };
    };
    let storageString = JSON.stringify(storageObject);
    localStorage.setItem("ticTacToe", storageString);
    return;
  };


  const endTurn = () => {
    occupiedCells.push(markedCell);
    markedCell = "";
    storageObject.activeGame.currentTurn++;
    if (storageObject.activeGame.currentTurn % 2 !== 0) {
      document.querySelector("#gameboard-turn-indicator").innerText = `It's ${storageObject.activeGame.oddTurns.name}'s turn.`;
      if (storageObject.activeGame.oddTurns.name === "Computer") {
        setTimeout(computerMark, 3000)
      }
    } else {
      document.querySelector("#gameboard-turn-indicator").innerText = `It's ${storageObject.activeGame.evenTurns.name}'s turn.`;
      if (storageObject.activeGame.evenTurns.name === "Computer") {
        setTimeout(computerMark, 3000)
      }
    };
    let storageString = JSON.stringify(storageObject);
    localStorage.setItem("ticTacToe", storageString);
  };

  const evaluateMarks = () => {
    // Evaluate rows
    if (document.querySelector("#cell-1").innerText !== "" && document.querySelector("#cell-1").innerText === document.querySelector("#cell-2").innerText && document.querySelector("#cell-2").innerText === document.querySelector("#cell-3").innerText) {
      assignWin(document.querySelector("#cell-1"));
    } else if (document.querySelector("#cell-4").innerText !== "" && document.querySelector("#cell-4").innerText === document.querySelector("#cell-5").innerText && document.querySelector("#cell-5").innerText === document.querySelector("#cell-6").innerText) {
      assignWin(document.querySelector("#cell-4"));
    } else if (document.querySelector("#cell-7").innerText !== "" && document.querySelector("#cell-7").innerText === document.querySelector("#cell-8").innerText && document.querySelector("#cell-8").innerText === document.querySelector("#cell-9").innerText) {
      assignWin(document.querySelector("#cell-7"));
    // Evaluate columns
    } else if (document.querySelector("#cell-1").innerText!== "" && document.querySelector("#cell-1").innerText === document.querySelector("#cell-4").innerText && document.querySelector("#cell-4").innerText === document.querySelector("#cell-7").innerText) {
      assignWin(document.querySelector("#cell-1"));
    } else if (document.querySelector("#cell-2").innerText!== "" && document.querySelector("#cell-2").innerText === document.querySelector("#cell-5").innerText && document.querySelector("#cell-5").innerText === document.querySelector("#cell-8").innerText) {
      assignWin(document.querySelector("#cell-2"))
    } else if (document.querySelector("#cell-3").innerText!== "" && document.querySelector("#cell-3").innerText === document.querySelector("#cell-6").innerText && document.querySelector("#cell-6").innerText === document.querySelector("#cell-9").innerText) {
      assignWin(document.querySelector("#cell-3"));
    // Evaluate left to right top to bottom diagonal
    } else if (document.querySelector("#cell-1").innerText!== "" && document.querySelector("#cell-1").innerText === document.querySelector("#cell-5").innerText && document.querySelector("#cell-5").innerText === document.querySelector("#cell-9").innerText) {
      assignWin(document.querySelector("#cell-1"));
    // Evaluate left to right bottom to top diaganol
    } else if (document.querySelector("#cell-7").innerText!== "" && document.querySelector("#cell-7").innerText === document.querySelector("#cell-5").innerText && document.querySelector("#cell-5").innerText === document.querySelector("#cell-3").innerText) {
      assignWin(document.querySelector("#cell-7"));
    } else {
      return endTurn();
    };
    // End of evaluateMarks function
  };

  const instantiateMultiplayerGame = () => {
    console.log("Multiplayer Instance")
    const newGame = Object.create(gameObjectModel);
    newGame.currentTurn = gameObjectModel.currentTurn;
    newGame.initiative = setInitiative();

    if (newGame.initiative === true) {
      newGame.oddTurns = storageObject.activePlayerOne;
      document.querySelector("#gameboard-turn-indicator").innerText = `${newGame.oddTurns.name} goes first!`;
      newGame.evenTurns = storageObject.activePlayerTwo;
    } else {
      newGame.oddTurns = storageObject.activePlayerTwo;
      document.querySelector("#gameboard-turn-indicator").innerText = `${newGame.oddTurns.name} goes first!`;
      newGame.evenTurns = storageObject.activePlayerOne;
      // End of if else
    };

    storageObject.activeGame = newGame;
    storageObject.activeGame.currentTurn++;
    let storageString = JSON.stringify(storageObject);
    localStorage.setItem("ticTacToe", storageString);

    return renderGameBoard()
    // End of instantiateMultiplayerGame function
  };

  const instantiateSingleplayerGame = () => {
    console.log("Singleplayer Instance")
    const newComputerInstance = {}
    newComputerInstance.name = "Computer";
    if (storageObject.activePlayerOne === null) {
      storageObject.activePlayerOne = newComputerInstance;
    } else {
      storageObject.activePlayerTwo = newComputerInstance;
    }
    let storageString = JSON.stringify(storageObject)
    localStorage.setItem("ticTacToe", storageString)

    const newGame = Object.create(gameObjectModel);
    newGame.currentTurn = gameObjectModel.currentTurn;
    newGame.initiative = setInitiative();

    if (newGame.initiative === true) {
      newGame.oddTurns = storageObject.activePlayerOne;
      document.querySelector("#gameboard-turn-indicator").innerText = `${newGame.oddTurns.name} goes first!`;
      newGame.evenTurns = storageObject.activePlayerTwo;
    } else {
      newGame.oddTurns = storageObject.activePlayerTwo;
      document.querySelector("#gameboard-turn-indicator").innerText = `${newGame.oddTurns.name} goes first!`;
      newGame.evenTurns = storageObject.activePlayerOne;
      // End of if else
    };

    storageObject.activeGame = newGame;
    storageObject.activeGame.currentTurn++;
    storageString = JSON.stringify(storageObject);
    localStorage.setItem("ticTacToe", storageString);

    renderGameBoard()

    if (storageObject.activeGame.oddTurns.name === "Computer") {
      setTimeout(computerMark, 3000)
    }
    return
    // End of instantiateSingleplayerGame function
  }

  const resetActiveGame = () => {
    storageObject.activeGame = null;
    let storageString = JSON.stringify(storageObject);
    localStorage.setItem("ticTacToe", storageString);
  };

  const renderGameBoard = () => {
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
      cell.addEventListener("click", (e) => {markCell(e)}, true);
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
  };

  const checkGameMode = (() => {
    if (storageObject.activePlayerOne === null || storageObject.activePlayerTwo === null || storageObject.activePlayerOne.name === "Computer" || storageObject.activePlayerTwo.name === "Computer") {
      instantiateSingleplayerGame()
    } else {
      instantiateMultiplayerGame()
    }
    return
    // End of checkGameMode function
  })()

  return {
    endTurn,
    evaluateMarks,
    markCell,
    resetActiveGame,
    // renderGameBoard,
    // setInitiative,
  };
})();