const app = (() => {
  console.log("app.js successfully loaded.");

  let postCount = 0;
  const print = (str) => {
    let mainDiv = document.querySelector("#main");
    let newPrintStatement = document.createElement("div");
    newPrintStatement.innerHTML = `<h1 id=${postCount}>${str}</h1>`;
    postCount++;
    return mainDiv.appendChild(newPrintStatement);
  }
  
  return {
    // Expose modules here
    print,
  } 
})();