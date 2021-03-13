const views = (() => {
  console.log("views.js successfully loaded.");

  const welcome = (() => {
    document.querySelector("main").innerHTML = `
      <div id="welcome">
        <h1>Welcome to Tic-Tac-Toe!</h1>
        <form>
          <fieldset>
            <legend>Create New User</legend>
            <input placeholder="name">
            <button type="button">Submit</button>
          </fieldset>
        </form>
      </div>
    `;
  })();
})();