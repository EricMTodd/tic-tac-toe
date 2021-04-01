const viewsController = (() => {
  let storageObject = JSON.parse(localStorage.ticTacToe)

  const renderLeaderboard = (arr) => {
    // Render a list of users sorted by wins
    let leaderboardUsersList = document.querySelector("#leaderboard-users-list")
    for (let i = 0; i < arr.length; i ++) {
      let listItem = document.createElement("li")
      listItem.innerText = `${i + 1}. Player Name: ${arr[i].name}\nLifetime Wins: ${arr[i].wins}`
      leaderboardUsersList.appendChild(listItem)
    }
    return
    // End of renderLeaderboard function
  }

  const sortUsersByWins = (() => {
    let usersList = storageObject.usersList
    let listLength = storageObject.usersList.length
    let sortedList = []
    let highScore = 0
    let user = usersList[0]
    let spliceIndex = 0

    for (let i = 0; i < listLength; i++) {
      for (let i = 0; i < usersList.length; i++) {
        if (usersList[i].wins > highScore) {
          highScore = usersList[i].wins
          user = usersList[i]
          spliceIndex = i
        }
      }
      sortedList.push(user)
      usersList.splice(spliceIndex, 1)
      user = usersList[0]
      highScore = 0
      spliceIndex = 0  
    }

    return renderLeaderboard(sortedList)
    // End of findUserByWins function
  })()

  const verifyUsers = (() => {
    if (storageObject.activePlayerOne === null || storageObject.activePlayerTwo === null) {
      let statusMessage = document.createElement("p")
      statusMessage.innerText = "Two players must be logged in to play."
      document.querySelector("#game-mode-selection-container").appendChild(statusMessage)
    } else {
      document.querySelector("#start-game-button").disabled = false
    }
    return
    // End of verifyUsers function
  })()

  return {
    renderLeaderboard,
    verifyUsers,
  }
})()