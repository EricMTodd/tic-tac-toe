const users = (() => {
  console.log("users.js successfully loaded.")
  const createUser = (name) => {
    return {
      name,
      wins: 0,
      losses: 0,
      created: Date(),
    }

  };

  return {
    createUser,
  }
})();