const viewsController = (() => {
  let storageObject = JSON.parse(localStorage.ticTacToe);
  usersList = [];

  const sortUsersByWins = (() => {
    let sortedList = [];
    usersList = [
      {
        name: "Caitlyn",
        wins: 4,
      },
      {
        name: "Dorian",
        wins: 3,
      },
      {
        name: "Eric",
        wins: 5,
      },
      {
        name: "Silver",
        wins: 3,
      },
      {
        name: "Markham",
        wins: 1,
      },
      {
        name: "Will",
        wins: 2,
      },
    ];
    let highScoringPlayer = usersList[0];
    let spliceIndex = 0;
    let listLength = 6;
    // Find highest score

    while (listLength > 0) {

      for (let i = 0; i < usersList.length; i++) {
        if (usersList[i].wins > highScoringPlayer.wins) {
          highScoringPlayer = usersList[i];
          spliceIndex = i;
        }
      }
      sortedList.push(highScoringPlayer);
      usersList.splice(spliceIndex, 1);
      listLength--;
      highScoringPlayer = usersList[0];
    }

    for (let i = 0; i < sortedList.length; i++) {
      // console.log(`usersList[i].name: ${usersList[i].name}`);
      console.log(`sortedList[i].name: ${sortedList[i].name}\nsortedList[i].wins: ${sortedList[i].wins}`)
    }

  })();

  
  const renderLeaderboard = (() => {
    // Render a list of users sorted by wins
    return;
    // End of renderLeaderboard function
  })();

  const verifyUsers = (() => {
    if (storageObject.activePlayerOne === null || storageObject.activePlayerTwo === null) {
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
    renderLeaderboard,
    verifyUsers,
  };
})();