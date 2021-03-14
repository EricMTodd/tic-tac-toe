const viewsController = (() => {
  let main = document.querySelector("main");

  const renderLandingPage = (() => {
    return main.innerHTML = `
      <div id="landing-page-container">
        <div id="create-new-user-form">
          <form>
            <fieldset>
              <legend>Create New User</legend>
              <input id="create-new-user-name-input" placeholder="Name">
              <button type="button" onclick="usersController.createUser(document.querySelector('#create-new-user-name-input').value)">Submit</button>
            </fieldset>
          </form>
        </div>
        <br>
        <div id="leaderboard-container">
          <h1>Leaderboard</h1>
          <ul id="leaderboard-users-list"></ul>
        </div>
      </div>
    `;
  })();

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
    // renderLandingPage,
    // renderLeaderboard,
  }
})();