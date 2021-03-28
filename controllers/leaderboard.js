const viewsController = (() => {
  let storageObject = JSON.parse(localStorage.ticTacToe);

  
  const renderLeaderboard = (() => {
    let leaderboardUsersList = document.querySelector("#leaderboard-users-list");

    // Loop over users and display them
    for (let i = 0; i < storageObject.usersList.length; i++) {
      let userListItem = document.createElement("li");
      userListItem.id = storageObject.usersList[i].id;
      userListItem.innerText = storageObject.usersList[i].name;
      leaderboardUsersList.appendChild(userListItem);
    }
    return;
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