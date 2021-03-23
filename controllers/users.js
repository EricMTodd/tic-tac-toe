const usersController = (() => {
  const storageObject = JSON.parse(localStorage.ticTacToe);

  const findUser = (email, password) => {
    for (let i = 0; i < storageObject.usersList.length; i++) {
      if (email === storageObject.usersList[i].email) {
        let user = storageObject.usersList[i];
        return user;
      } else {
        alert("User does not exist.");
      };
    };
  };

  const createUser = (name, email, password, confirmPassword) => {
    // Check to see if email is already in use
      for (let i = 0; i < storageObject.usersList.length; i++) {
        if (email === storageObject.usersList[i].email) {
          return alert("A user with this email already exists.");
        };
      };
        
        // Create new user object
        let newUser = Object.create(user);
        // Clean up data
        name = name.trim();
        password = password.trim();
        confirmPassword.trim();

        // Verify clean data
        if (name === "" || email === "" || password === "" || confirmPassword === "") {
          return  alert("Please fill out all form fields");
        } else {
          if (password === confirmPassword) {
            // Assign object properties
            newUser.id = storageObject.uniqueId;
            newUser.name = name;
            newUser.email = email;
            newUser.password = encryptionController.generateEncryption(password);
            newUser.wins = user.wins;
            newUser.created = user.created;

            // Add new user to the database
            storageObject.uniqueId++;
            storageObject.usersList.push(newUser);
            let storageString = JSON.stringify(storageObject);
            localStorage.setItem("ticTacToe", storageString);
            console.log(newUser);
            alert(`${name} has been added to the database!`);

            // Login
            storageObject.activePlayerOne = newUser;
            storageString = JSON.stringify(storageObject);
            localStorage.setItem("ticTacToe", storageString);
            window.location.replace('../index.html');
          } else {
            alert("Passwords do not match.");
          };
        };
    // End of createUser function
  };

  return {
    createUser,
    findUser,
  };
})();