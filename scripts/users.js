const usersController = (() => {

  const createUser = (name) => {
    let obj = JSON.parse(localStorage.ticTacToe);
    let leaderboardUsersList = document.querySelector("#leaderboard-users-list");

    let newUser = {
      id: obj.uniqueId,
      name,
      wins: 0,
      created: Date(),
    };

    if (name != "") {
      ((newUser, obj) => {
        obj.usersList.push(newUser);
        obj.uniqueId++;
        let str = JSON.stringify(obj);
        localStorage.setItem("ticTacToe", str);
        return document.querySelector("#create-new-user-name-input").value = "";
      })(newUser, obj);

      ((newUser, leaderboardUsersList) => {
        let userListItem = document.createElement("li");
        userListItem.id = newUser.id;
        userListItem.innerText = newUser.name;
        return leaderboardUsersList.appendChild(userListItem);
      })(newUser, leaderboardUsersList);
    } else {
      alert("Please enter a valid username.")
    }
  }
  return {
    createUser,
  }
})();