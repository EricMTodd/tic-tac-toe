const ticTacToe = (() => {
  console.log("tic-tac-toe.js successfully loaded.");
  let playerList = [];

  const player = (name) => {
    let newPlayer = {
      name,
      wins: 0,
      losses: 0,
      created: Date.now,
    }
    playerList.push(newPlayer);
  }

  const welcome = (() => {
    // Display welcome page/leaderboard
  })();



  return {
    playerList,
    player,
  }
})();