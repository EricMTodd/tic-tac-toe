const gameController = (() => {
  console.log("game.js successfully loaded.");
  let storageObject = JSON.parse(localStorage.ticTacToe);

  const verifyUsers = () => {
    if (storageObject.activePlayerOne === null || storageObject.activePlayerTwo === null) {
      console.log("Players are required to start");
    }
    return;
    // End of verifyUsers function
  };

  return {
    verifyUsers,
  }
})();