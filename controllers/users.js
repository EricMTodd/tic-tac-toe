const usersController = (() => {
  const createUser = (name) => {
    const obj = JSON.parse(localStorage.ticTacToe);
    if (name != "") {
      const newUser = Object.create(user);
      newUser.id = obj.uniqueId;
      newUser.name = name;
      newUser.wins = user.wins;
      newUser.created = user.created;

      obj.usersList.push(newUser);
      obj.uniqueId++;
      const str = JSON.stringify(obj);
      localStorage.setItem("ticTacToe", str);
      return document.querySelector("#create-new-user-name-input").value = "";
    } else {
      alert("Please enter a valid username.")
    }
  }
  return {
    createUser,
  }
})();