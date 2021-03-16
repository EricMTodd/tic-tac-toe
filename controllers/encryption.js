const encryptionController = (() => {

  const generateSalt = () => {
    const alphanumerics = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let saltLength = Math.floor((Math.random() * 21) + 1);
    let saltKey = "";
    for (let i = 0; i < saltLength; i++) {
      let randomNumber = Math.floor(Math.random() * 61);
      saltKey += alphanumerics[randomNumber];
    };
    return saltKey;
  };

  const encrypt = (password, salt) => {
    // Use salt
  };

  const decrypt = () => {};

  return {
    generateSalt,
  };
})();