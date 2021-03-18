const encryptionController = (() => {
  const alphanumerics = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

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
    saltedPassword = encryptedPassword + salt;
    return saltedPassword;

  }

  const decryptPassword = (password) => {
    let salt = "";
    return console.log(password);
    // Split encrypted string at length of password
    // Use salt as keyWord to generate a keyArray
    // Use keyArray to unshift the scrambled password
  };

  return {
    generateEncryptedPassword,
    decryptPassword,
  };
})();