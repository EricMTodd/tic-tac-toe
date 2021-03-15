const renderLoginPage = (() => {
  let main = document.querySelector("main");

  const userRegistrationFrom = (() => {
    return main.innerHTML = `
      <div id="create-new-user-form">
        <form onsubmit="document.querySelector('#create-new-user-button').click()">
          <fieldset>
            <legend>Create New User</legend>
            <input id="create-new-user-name-input" placeholder="Name">
            <button id="create-new-user-button" type="button" onclick="console.log('click')">Submit</button>
          </fieldset>
        </form>
      </div>
    `;
  })();

  userLoginForm = () => {
    // Login form goes here!
  }

  return {
    userRegistrationFrom,
  }
})();