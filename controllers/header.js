const headerController = (() => {
  let storageObject = JSON.parse(localStorage.ticTacToe);

  const renderIndexPlayerCardContainer = () => {
    let playerCardContainer = document.querySelector("#index-player-card-container");
        if (storageObject.activePlayerOne === null && storageObject.activePlayerTwo === null) {
        return playerCardContainer.innerHTML = `
          <a href="views/userForms.html">Login</a>
          <br><br>
        `;
    } else if (storageObject.activePlayerOne !== null && storageObject.activePlayerTwo !== null) {
     return playerCardContainer.innerHTML = `
      <div id="active-player-one-card">
        <p>Player 1: ${storageObject.activePlayerOne.name}</p>
        <button id="active-player-one-logout-button" type="button" onclick="loginController.logout(1)">Logout</button>
      </div>
      <div id="active-player-two-card">
        <p>Player 2: ${storageObject.activePlayerTwo.name}</p>
        <button id="active-player-two-logout-button" type="button" onclick="loginController.logout(2)">Logout</button>
      </div>
      <br>
      `;
    } else if (storageObject.activePlayerOne !== null) {
      return playerCardContainer.innerHTML = `
      <div id="active-player-one-card">
        <a href="views/userForms.html">Login</a>
        <p>Player 1: ${storageObject.activePlayerOne.name}</p>
        <button id="active-player-one-logout-button" type="button" onclick="loginController.logout(1)">Logout</button>
      </div>
      <br>
    `;
    } else if (storageObject.activePlayerTwo !== null) {
      return playerCardContainer.innerHTML = `
      <div id="active-player-two-card">
        <a href="views/userForms.html">Login</a>
        <p>Player 2: ${storageObject.activePlayerTwo.name}</p>
        <button id="active-player-Two-logout-button" type="button" onclick="loginController.logout()">Logout</button>
      </div>
      <br>
    `;
    } else {
      console.log("wtf");
    }
    // End of rednerplayerCardContainer function
  };

  const renderGameboardPlayerCardContainer = () => {
    let playerCardContainer = document.querySelector("#gameboard-player-card-container");
        if (storageObject.activePlayerOne === null && storageObject.activePlayerTwo === null) {
        return playerCardContainer.innerHTML = `
          <a href="views/userForms.html">Login</a>
          <br><br>
        `;
    } else if (storageObject.activePlayerOne !== null && storageObject.activePlayerTwo !== null) {
     return playerCardContainer.innerHTML = `
      <div id="active-player-one-card">
        <p>Player 1: ${storageObject.activePlayerOne.name}</p>
      </div>
      <div id="active-player-two-card">
        <p>Player 2: ${storageObject.activePlayerTwo.name}</p>
      </div>
      `;
    } else if (storageObject.activePlayerOne !== null) {
      return playerCardContainer.innerHTML = `
      <div id="active-player-one-card">
        <a href="views/userForms.html">Login</a>
        <p>Player 1: ${storageObject.activePlayerOne.name}</p>
        <button id="active-player-one-logout-button" type="button" onclick="loginController.logout(1)">Logout</button>
      </div>
    `;
    } else if (storageObject.activePlayerTwo !== null) {
      return playerCardContainer.innerHTML = `
      <div id="active-player-two-card">
        <a href="views/userForms.html">Login</a>
        <p>Player 2: ${storageObject.activePlayerTwo.name}</p>
        <button id="active-player-Two-logout-button" type="button" onclick="loginController.logout()">Logout</button>
      </div>
    `;
    } else {
      console.log("wtf");
    }
    // End of rednerplayerCardContainer function
  };

  return {
    renderIndexPlayerCardContainer,
    renderGameboardPlayerCardContainer,
  };
})();