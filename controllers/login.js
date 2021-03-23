const loginController = (() => {
  
  const login = (email, password) => {
    if (email === "" || password === "") {
      return alert("Please fill out all form fields.");
    } else {
      let user = usersController.findUser(email, password);
      encryptionController.decrypt(password, user);
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