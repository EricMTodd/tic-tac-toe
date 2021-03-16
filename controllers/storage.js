let storageController = (() => {
  const initStorage = (() => {
    if (!localStorage.ticTacToe) {
      let str = JSON.stringify(storageObjectModel);
      localStorage.setItem("ticTacToe", str);
    }
  })();

  return {
  }
})();