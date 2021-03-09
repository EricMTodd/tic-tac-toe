const ticTacToe = ((doc) => {
  // Check to see if document has loaded
  if (doc) {
    console.log("tic-tac-toe.js successfully loaded.");
    // Modules
    return {
      // Expose modules here
    } 
  } else {
    return console.log("Document failed to load.")
  }
})(document);