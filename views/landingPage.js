const renderLandingPage = (() => {
  document.querySelector("main").innerHTML = `

<br>
<div id="leaderboard-container">
  <h1>Leaderboard</h1>
    <button onclick="localStorage.clear(), location.reload()">Clear LocalStorage</button>
  <ul id="leaderboard-users-list"></ul>
</div>
`;

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
  }
})();



