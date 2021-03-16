const userFormsController = (() => {
  let userFormContainer = document.querySelector("#user-form-container");

  const renderCreateUserForm = () => {
    userFormContainer.innerHTML = `
    <div id="create-new-user-form">
      <form onsubmit="document.querySelector('#create-new-user-button').click()">
        <fieldset>
          <legend>Create New User</legend>
          <input autocomplete="off" id="create-new-user-name-input" placeholder="Name">
          <br>
          <input disabled autocomplete="off" placeholder="Password">
          <br>
          <input disabled autocomplete="off" placeholder="Confirm password">
          <br>
          <button id="create-new-user-button" type="button"
            onclick="usersController.createUser(document.querySelector('#create-new-user-name-input').value)">Submit</button>
        </fieldset>
      </form>
      <p>Already have an account?</p><button type="button" onclick="userFormsController.renderLoginForm()">Login</button>
    </div>
  `;
  };

  const renderLoginForm = () => {
    userFormContainer.innerHTML = `
      <div id="login-form">
        <form onsubmit="document.querySelector('#login-button').click()">
          <fieldset>
            <legend>Login</legend>
            <input autocomplete="off" type="text" placeholder="name">
            <br>
            <input disabled autocomplete="off" type="text" placeholder="password">
            <br>
            <button disabled id="login-button" type="button" onclick="console.log('click')")>Login</button>
          </fieldset>
        </form>
        <p>Need an account?</p><button type="button" onclick="userFormsController.renderCreateUserForm()">Create Account</button>
      </div>
    `;
  };

  renderLoginForm();

  return {
    renderCreateUserForm,
    renderLoginForm,
  };
})();