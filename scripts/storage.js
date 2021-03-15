let storageController = (() => {

  let storageObjectModel = {
    uniqueId: 0,
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