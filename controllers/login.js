const loginController = (() => {
  
  const login = (email, password) => {
    if (email === "" || password === "") {
      return alert("Please fill out all form fields.");
    } else {
      let user = usersController.findUser(email, password);
      if (user === undefined) {
        return alert("User does not exist.");
      } else {
        encryptionController.decrypt(password, user);
      };
    };
    return;
  };

  const logout = () => {
    // Logout
  };

  return {
    login,
    // logout,
  };
})();