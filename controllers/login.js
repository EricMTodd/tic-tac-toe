const loginController = (() => {
  let storageObject = JSON.parse(localStorage.ticTacToe);
  

  const login = (user) => {
    storageObject.activePlayerOne = user;
    storageString = JSON.stringify(storageObject);
    localStorage.setItem("ticTacToe", storageString);
    window.location.replace('../index.html');
  };

  const logout = () => {
    // Logout
  };

  return {
    login,
    // logout,
  };
})();