const encryptionController = (() => {
  const alphanumerics = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // let password = "password";
  let saltedPassword = "";
  
  const generateSalt = (password) => {
    let saltLength = Math.floor((Math.random() * 11) + 10);
    let saltKey = [];
    let salt = "";
    for (let i = 0; i < saltLength; i++) {
      let randomNumber = Math.floor(Math.random() * alphanumerics.length) + 1;
      saltKey.push(randomNumber);
      salt += alphanumerics[randomNumber];
    };
    return encrypt(password, salt, saltKey);
  };

  const encrypt = (password, salt, saltKey) => {
    // console.log(`password: ${password}\nsalt: ${salt}\nsaltKey:`, saltKey);
    let encryptedPassword = "";
    let passwordKey = [];

    // Create password key
    for (let i = 0; i < password.length; i++) {
      // console.log(password[i]);
      for (let k = 0; k < alphanumerics.length; k++) {
        // console.log(alphanumerics[k]);
        if (password[i] == alphanumerics[k]) {
          // console.log(`Match\n${alphanumerics[k]} index: ${k}`);
          passwordKey.push(k);
        }
      }
    };
    // console.log(`passwordKey: `, passwordKey);

    // Encrypt password
    for (let i = 0; i < passwordKey.length; i++) {
      let encryptionIndex = passwordKey[i] + saltKey[i];
      if (encryptionIndex > alphanumerics.length) {
        encryptionIndex -= alphanumerics.length;
      }
      encryptedPassword += alphanumerics[encryptionIndex];
    }
    // console.log(`encryptedPassword: ${encryptedPassword + salt}`);
    return saltedPassword = encryptedPassword + salt;
  };

  const decrypt = () => {};

  // generateSalt();

  return {
    generateSalt,
  };
})();