const usersController = (() => {

  const createUser = (name) => {
    let obj = JSON.parse(localStorage.ticTacToe);

    let userObjectModel = {
      id: obj.uniqueId,
      name,
      wins: 0,
      created: Date(),
    }

    obj.usersList.push(userObjectModel);
    obj.uniqueId++;
    let str = JSON.stringify(obj);
    return localStorage.setItem("ticTacToe", str);
  }

  const addNewUser = () => {

  }

  return {
    createUser,
  }
})();