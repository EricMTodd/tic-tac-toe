const viewsController = (() => {
  const renderLeaderboard = (() => {
    let leaderboardUsersList = document.querySelector("#leaderboard-users-list");
    let storageObject = JSON.parse(localStorage.ticTacToe);

    // Loop over users and display them
    for (let i = 0; i < storageObject.usersList.length; i++) {
      let userListItem = document.createElement("li");
      userListItem.id = storageObject.usersList[i].id;
      userListItem.innerText = storageObject.usersList[i].name;
      leaderboardUsersList.appendChild(userListItem);
    }
    return;
  })();

  return {
    renderLeaderboard,
  };
})();