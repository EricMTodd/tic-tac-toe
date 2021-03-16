const usersController = (() => {
  const createUser = (name, password, confirmPassword) => {
    const obj = JSON.parse(localStorage.ticTacToe);
    name = name.trim();
    password = password.trim();
    confirmPassword.trim();
    // Authorize clean data
    if (name != "" && password != "") {
      if (password == confirmPassword) {
        // Create newUser object
        const newUser = Object.create(user);
        newUser.id = obj.uniqueId;
        newUser.name = name;
        newUser.password = encryptionController.generateSalt(password);
        newUser.wins = user.wins;
        newUser.created = user.created;
  
        // Store newUser object in localStorage
        obj.usersList.push(newUser);
        obj.uniqueId++;
        const str = JSON.stringify(obj);
        localStorage.setItem("ticTacToe", str);
        document.querySelector("#create-new-user-name-input").value = "";
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

  return {
    createUser,
  };
})();