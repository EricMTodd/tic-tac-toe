const headerController = (() => {
  let storageObject = JSON.parse(localStorage.ticTacToe);
  let activePlayerOne = storageObject.activePlayerOne;

  const renderIndexHeader = (() => {
    let indexHeader = document.querySelector("#index-header");
    if (activePlayerOne === null) {
      indexHeader.innerHTML = `
        <h1>Welcome to Tic-Tac-Toe!</h1>
        <a href="views/userForms.html">Login</a>
        <br><br>
      `;
      } else {
        indexHeader.innerHTML = `
        <h1>Welcome ${activePlayerOne.name}!</h1>
        <button type="button" onclick="loginController.logout()">Logout</button>
        <br><br>
      `;
    };
    // End of rednerIndexHeader function
  })();

  return {
      // renderIndexHeader,
  };
})();