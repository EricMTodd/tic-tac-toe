let storageController = (() => {

  let storageObjectModel = {
    uniqueId: 3,
    usersList: [],
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