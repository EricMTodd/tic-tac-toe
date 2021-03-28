const gameController = (() => {
  let storageObject = JSON.parse(localStorage.ticTacToe);

  const renderGameBoard = (() => {
    // Redirect
    let gameBoard = document.querySelector("#game-board-container");
    let rowNumber = 0;

    // Render grid cells
    for (let i = 0; i < 9; i++) {

      if (i % 3 === 0) {
        rowNumber++;
        let row = document.createElement("div");
        row.id = `row-${rowNumber}`;
        row.className = "row";
        gameBoard.appendChild(row);

        let cell = document.createElement("div");
        cell.className = "cell";
        cell.id = `cell-${i + 1}`;
        let currentRow = document.querySelector(`#row-${rowNumber}`);
        currentRow.appendChild(cell);

      } else {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.id = `cell-${i + 1}`;
        let currentRow = document.querySelector(`#row-${rowNumber}`);
        currentRow.appendChild(cell);
        // End if statement
      };
      // End for loop
    };
    // End of renderGameBoard function
  })();

  return {
    renderGameBoard,
  }
})();