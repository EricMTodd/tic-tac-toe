const loginController = (() => {
  let storageObject = JSON.parse(localStorage.ticTacToe);
  
  const login = (email, password) => {
    email = email.trim();
    password = password.trim();
    let user = usersController.findUser(email, password);

    if (user.email === storageObject.activePlayerOne.email || user.email === storageObject.activePlayerTwo.email) {
      return alert("You cannot log the same player in twice.");
    }    
    if (email === "" || password === "") {
      return alert("Please fill out all form fields.");
    } else {
      if (user === undefined) {
        return alert("User does not exist.");
      } else {
        encryptionController.decrypt(password, user);
      };
    };
    return;
  };

  const logout = (num) => {
    if (num === 1) {
      storageObject.activePlayerOne = null;
      let storageString = JSON.stringify(storageObject);
      localStorage.setItem("ticTacToe", storageString);
      return location.reload();
    } else {
      storageObject.activePlayerTwo = null;
      let storageString = JSON.stringify(storageObject);
      localStorage.setItem("ticTacToe", storageString);
      return location.reload();
    };
  };

  return {
    login,
    logout,
  };
})();