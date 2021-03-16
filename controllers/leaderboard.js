const viewsController = (() => {
  const renderLeaderboard = (() => {
    let leaderboardUsersList = document.querySelector("#leaderboard-users-list");
    let obj = JSON.parse(localStorage.ticTacToe);
    for (let i = 0; i < obj.usersList.length; i++) {
      let userListItem = document.createElement("li");
      userListItem.id = obj.usersList[i].id;
      userListItem.innerText = obj.usersList[i].name;
      leaderboardUsersList.appendChild(userListItem);
    }
    return;
  })();

  return {
    renderLeaderboard,
  }

})();