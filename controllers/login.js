const loginController = (() => {
  
  const login = (email, password) => {
    let user = usersController.findUser(email);
    encryptionController.decrypt(password, user);
  };

  const logout = () => {
    // Logout
  };

  return {
    login,
    // logout,
  };
})();