let storageController = (() => {

  let storageObjectModel = {
    uniqueId: 3,
    usersList: [
      //   {
      //   id: 0,
      //   name: "Caitlyn",
      //   wins: 999,
      //   created: Date(),
      // },
      // {
      //   id: 1,
      //   name: "Eric",
      //   wins: 3,
      //   created: Date(),
      // },
      // {
      //   id: 2,
      //   name: "Bruce",
      //   wins: 0,
      //   created: Date(),
      // }
    ],
  };

  const initStorage = (() => {
    if (!localStorage.ticTacToe) {
      let str = JSON.stringify(storageObjectModel);
      localStorage.setItem("ticTacToe", str);
    }
  })();

  return {
    // storageObjectModel,
  }
})();

var test = "test";