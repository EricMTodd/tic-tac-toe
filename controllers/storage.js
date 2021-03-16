let storageController = (() => {
  const initStorage = (() => {

    // Instantiate localStorage
    if (!localStorage.ticTacToe) {
      let str = JSON.stringify(storageObjectModel);
      localStorage.setItem("ticTacToe", str);
    }
  })();

  return {
    
  };
})();