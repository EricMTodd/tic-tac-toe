const userFormsController = (() => {
  let userFormContainer = document.querySelector("#user-form-container");

  const renderCreateUserForm = () => {
    userFormContainer.innerHTML = `
    <div id="create-new-user-form">
      <form">
        <fieldset>
          <legend>Create New User</legend>
          <input autocomplete="off" id="create-new-user-name-input" placeholder="Name">
          <br>
          <input type="password" autocomplete="off" id="create-new-user-password-input" placeholder="Password">
          <br>
          <input type="password" autocomplete="off" id="confirm-new-user-password-input" placeholder="Confirm password">
          <br>
          <button id="create-new-user-button" type="button"
            onclick="usersController.createUser(document.querySelector('#create-new-user-name-input').value, document.querySelector('#create-new-user-password-input').value, document.querySelector('#confirm-new-user-password-input').value)">Submit</button>
        </fieldset>
      </form>
      <p>Already have an account?</p><button type="button" onclick="userFormsController.renderLoginForm()">Login</button>
    </div>
  `;
  };

  const renderLoginForm = () => {
    userFormContainer.innerHTML = `
      <div id="login-form">
        <form">
          <fieldset>
            <legend>Login</legend>
            <input disabled autocomplete="off" type="text" placeholder="name">
            <br>
            <input type="password" disabled autocomplete="off" type="text" placeholder="password">
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