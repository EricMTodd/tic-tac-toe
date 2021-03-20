const usersController = (() => {
  const storageObject = JSON.parse(localStorage.ticTacToe);
  console.log(storageObject);

  const createUser = (name, email, password, confirmPassword) => {
    for (let i = 0; i < storageObject.usersList.length; i++) {
      if (email == storageObject.usersList[i].email) {
        alert("A user with this email already exists.");
        return;
      }
    }
    name = name.trim();
    password = password.trim();
    confirmPassword.trim();
    // Authorize clean data
    if (name != "" && password != "") {
      if (password == confirmPassword) {
        // Create newUser object
        const newUser = Object.create(user);
        newUser.id = storageObject.uniqueId;
        newUser.name = name;
        newUser.email = email;
        newUser.password = encryptionController.generateEncryption(password);
        newUser.wins = user.wins;
        newUser.created = user.created;

        // Store newUser object in localStorage
        storageObject.usersList.push(newUser);
        storageObject.uniqueId++;
        const str = JSON.stringify(storageObject);
        localStorage.setItem("ticTacToe", str);
        document.querySelector("#create-new-user-name-input").value = "";
        document.querySelector("#create-new-user-email-input").value = "";
        document.querySelector("#create-new-user-password-input").value = "";
        document.querySelector("#confirm-new-user-password-input").value = "";
        alert(`${name} added to the database!`)
      } else {
        alert("Passwords do not match.");
      };
      return;
    } else {
      alert("Please fill out all form fields.")
    };
  };

  const findUser = (email) => {
    for (let i = 0; i < storageObject.usersList.length; i++) {
      if (email == storageObject.usersList[i].email) {
        let user = storageObject.usersList[i];
        return console.log(user);
      };
    };
  };

  return {
    createUser,
    findUser,
    // storageObject,
  };
})();