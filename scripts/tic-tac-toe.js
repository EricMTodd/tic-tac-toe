const ticTacToe = ((doc) => {
  console.log("tic-tac-toe.js successfully loaded.");
  let uniquePlayerId = 0;
  let playerList = [];

  const createPlayer = (name) => {
    let newPlayer = {
      id: uniquePlayerId,
      name,
      wins: 0,
      losses: 0,
      created: Date(),
    }
    uniquePlayerId++;
    console.log(`Adding ${newPlayer.name} to the playerList:`);
    document.querySelector("#playerName").value = "";
    playerList.push(newPlayer);
    console.log(playerList);
  };

  const welcome = (() => {
    // Display welcome page/leaderboard
    let mainDiv = document.querySelector("#main");
    // Check local storage for users.
    if (!localStorage.ticTacToe) {
      localStorage.setItem("ticTacToe", "");
      console.log("Displaying initial welcome page.");
      mainDiv.innerHTML = `
      <div id="initial-landing-page">
        <form>
          <fieldset>
            <legend>
              Create New User
            </legend>
            <br>
            <input id="playerName" placeholder="Name">
            <br><br>
            <button id="create-player-button" type="button">Submit</button>
          </fieldset>
        </form>
      </div>
      `;
    } else {
      console.log("Displaying registered users.");
    }
    // If users are present, display leaderboard.
    // Else, ask to create a user!
  })();

  const activateCreatePlayerButton = (() => {
    let btn = document.querySelector("#create-player-button");
    return btn.addEventListener("click", createPlayer(document.querySelector("#playerName").value))
  })();

  const gameLoop = () => {
    // Game logic for placing symbols goes here!
  };

  const endTurn = () => {
    // Logic for switching symbols and player turns.
  };

  const evaluateRound = () => {
    // Check for win condition
  };

  return {
    // createPlayer,
    playerList,
    activateCreatePlayerButton,
  };
})(document);

const storageOperators = ((obj) => {
  console.log(obj);
  // const stringifyLocalStorage = (ticTacToe) => {
  //   // Store the entire ticTacToe ojbect in a string and store it as as value for localStorage.ticTacToe
  //   let stringifiedTicTacToeObject = JSON.stringify(ticTacToe);
  //   return stringifiedTicTacToeObject;
  // };

  // const parseLocalStorage = (stringifiedTicTacToeObject) => {
  //   // Parse the string store in localStorage.ticTacToe
  //   let parsedTicTacToeObject = JSON.parse(stringifiedTicTacToeObject);
  //   return parsedTicTacToeObject;
  // }

  // return {
  //   stringifyLocalStorage,
  //   parseLocalStorage,
  // }
})(ticTacToe);

