const app = ((doc) => {
  // Check to see if document has loaded
  if (doc) {
    console.log("app.js successfully loaded.");

    let postCount = 0;
    const print = (str) => {
      let mainDiv = document.querySelector("#main");
      let newPrintStatement = document.createElement("div");
      newPrintStatement.innerHTML = `<h1 id=${postCount}>${str}</h1>`;
      postCount++;
      return mainDiv.appendChild(newPrintStatement);
    };
  
    // Module Return Statement
    return {
      print,
    } 
  // Docuemnt has failed to load.
  } else {
    return console.log("Document failed to load.")
  }
})(document);