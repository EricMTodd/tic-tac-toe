const app = ((doc) => {
  if (document) {
    console.log("app.js successfully loaded.");
    let peopleList = [];
  
    let postCount = 0;
    const print = (str) => {
      let mainDiv = document.querySelector("#main");
      let newPrintStatement = document.createElement("div");
      newPrintStatement.innerHTML = `<h1 id=${postCount}>${str}</h1>`;
      postCount++;
      mainDiv.appendChild(newPrintStatement);
    }
  
    let personCount = 0;
    const person = (name, age, gender) => {
      let newPerson = {
        id: personCount,
        name,
        age,
        gender,
      };
      personCount++;
      peopleList.push(newPerson);
    }

    // Create local storage objects to tie each website
    let library = {
      initialVisit: true,
      uniqueId: 3,
      catalogue: {}
    }
  
    return {
      print,
      person,
      peopleList,
    }
  } else {
    console.log("Loading document...");
  }

})(document);