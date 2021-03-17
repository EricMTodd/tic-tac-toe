const encryptionController = (() => {
  const alphanumerics = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const generateEncryptedPassword = (password) => {
    let passwordKey = [];
    // console.log(`password: ${password}\nsalt: ${salt}\nsaltKey:`, saltKey);

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
    return generateSalt(passwordKey);
  };

  const generateSalt = (passwordKey) => {
    let saltLength = Math.floor((Math.random() * 11) + 10);
    let saltKey = [];
    let salt = "";
    for (let i = 0; i < saltLength; i++) {
      let randomNumber = Math.floor(Math.random() * alphanumerics.length) + 1;
      saltKey.push(randomNumber);
      salt += alphanumerics[randomNumber];
    };
    return saltPassword(passwordKey, saltKey, salt);
  };

  const saltPassword = (passwordKey, saltKey, salt) => {
    let encryptedPassword = "";
    let saltedPassword = "";

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
  }

  const decryptPassword = () => { };

  return {
    generateEncryptedPassword,
  };
})();