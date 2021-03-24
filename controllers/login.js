const loginController = (() => {
  
  const login = (email, password) => {
    email = email.trim();
    password = password.trim();
    if (email === "" || password === "") {
      return alert("Please fill out all form fields.");
    } else {
      let user = usersController.findUser(email, password);
      if (user === undefined) {
        return alert("User does not exist.");
      } else {
        encryptionController.decrypt(password, user);
      };
    };
    return;
  };

  const logout = () => {
    let storageObject = JSON.parse(localStorage.ticTacToe);
    storageObject.activePlayerOne = null;
    let storageString = JSON.stringify(storageObject);
    localStorage.setItem("ticTacToe", storageString);
    return location.reload();
  };

  return {
    login,
    logout,
  };
})();