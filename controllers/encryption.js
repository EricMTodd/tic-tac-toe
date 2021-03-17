const encryptionController = (() => {
  const alphanumerics = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const generateEncryptedPassword = (password) => {
    let passwordKey = [];

    // Create password key
    for (let i = 0; i < password.length; i++) {
      for (let k = 0; k < alphanumerics.length; k++) {
        if (password[i] == alphanumerics[k]) {
          passwordKey.push(k);
        }
      }
    };
    console.log(`generateEncrypedPassword.passwordKey: ${passwordKey}`);
    return generateSalt(passwordKey);
  };

  const generateSalt = (passwordKey) => {
    let saltLength = Math.floor((Math.random() * 11) + 10);
    let saltKey = [];
    let salt = "";
    for (let i = 0; i < saltLength; i++) {
      let randomNumber = Math.floor(Math.random() * alphanumerics.length);
      saltKey.push(randomNumber);
      salt += alphanumerics[randomNumber];
    };
    console.log(`generateSalt.passwordKey: ${passwordKey}\ngenerateSalt.saltKey: ${saltKey}\ngenerateSalt.salt: ${salt}`);
    return saltPassword(passwordKey, saltKey, salt);
  };

  const saltPassword = (passwordKey, saltKey, salt) => {
    let encryptedPassword = "";
    let saltedPassword = "";

    // Encrypt password
    for (let i = 0; i < passwordKey.length; i++) {
      let encryptionIndex = passwordKey[i] + saltKey[i];
      console.log(`encryptionIndex: ${encryptionIndex}`);
      if (encryptionIndex > alphanumerics.length) {
        encryptionIndex -= alphanumerics.length;
        console.log(`subtracted encryptionIndex: ${encryptionIndex}`);
      }
      encryptedPassword += alphanumerics[encryptionIndex];
    }
    console.log(`encryptedPassword: ${encryptedPassword}`);
    saltedPassword = encryptedPassword + salt;
    console.log(`saltedPassword: ${saltedPassword}`);
    return saltedPassword

  }

  const decryptPassword = () => { };

  const init = (() => {
    console.log(generateEncryptedPassword("testString"));
  })();

  return {
    generateEncryptedPassword,
    alphanumerics,
  };
})();