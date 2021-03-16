const encryptionController = (() => {
  const alphanumerics = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let password = "password";
  
  const generateSalt = () => {
    let saltLength = Math.floor((Math.random() * 21) + 1);
    let saltKey = [];
    let salt = "";
    for (let i = 0; i < saltLength; i++) {
      let randomNumber = Math.floor(Math.random() * 61);
      saltKey.push(randomNumber);
      salt += alphanumerics[randomNumber];
    };
    return encrypt(password, salt, saltKey);
  };

  const encrypt = (password, salt, saltKey) => {
    console.log(`password: ${password}\nsalt: ${salt}\nsaltKey:`, saltKey);
    let encryptedPassword = "";
    let passwordKey = [];
    for (let i = 0; i < password.length; i++) {
      // console.log(password[i]);
      for (let k = 0; k < alphanumerics.length; k++) {
        // console.log(alphanumerics[k]);
        if (password[i] == alphanumerics[k]) {
          console.log("Match");
        }
      }
    };
  };

  const decrypt = () => {};

  generateSalt();

  return {
    generateSalt,
  };
})();