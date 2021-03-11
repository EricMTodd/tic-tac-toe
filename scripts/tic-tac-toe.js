const ticTacToe = (() => {
  console.log("tic-tac-toe.js successfully loaded.");
  let playerList = [];

  const player = (name) => {
    let newPlayer = {
      name,
      wins: 0,
      losses: 0,
      created: Date(),
    }
    playerList.push(newPlayer);
  }

  const welcome = (() => {
    // Display welcome page/leaderboard
    let mainDiv = document.querySelector("#main");
    // Check local storage for users.
    // If users are present, display leaderboard.
    // Else, ask to create a user!
  })();

  const gameLoop = () => {
    // Game logic for placing symbols goes here!
  }

  const endTurn = () => {
    // Logic for switching symbols and player turns.
  }

  const evaluateRound = () => {
    // Check for win condition
  }

  return {
    playerList,
    player,
  }
})();