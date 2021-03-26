const gameController = (() => {
  let storageObject = JSON.parse(localStorage.ticTacToe);

  const verifyUsers = (() => {
    if (storageObject.activePlayerOne === null || storageObject.activePlayerTwo === null) {
      console.log("suck it");
      let statusMessage = document.createElement("p");
      statusMessage.innerText = "Two players must be logged in to play.";
      document.querySelector("#game-mode-selection-container").appendChild(statusMessage);
    } else {
      document.querySelector("#start-game-button").disabled = false;
    };
    return;
    // End of verifyUsers function
  })();

  return {
    verifyUsers,
  }
})();