const usersController = (() => {

  const createUser = (name) => {
    let obj = JSON.parse(localStorage.ticTacToe);
    // if (name != "") {
    ((obj) => {
      let newUser = Object.create(user);
      newUser.id = obj.uniqueId;
      newUser.name = name;
      newUser.wins = user.wins;
      newUser.created = user.created;

      obj.usersList.push(newUser);
      obj.uniqueId++;
      let str = JSON.stringify(obj);
      localStorage.setItem("ticTacToe", str);
      return document.querySelector("#create-new-user-name-input").value = "";
    })(obj);
    // } else {
    //   alert("Please enter a valid username.")
    // }
  }
  return {
    createUser,
  }
})();