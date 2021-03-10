const app = (() => {
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

  return {
    print,
    person,
    peopleList,
  }
})();