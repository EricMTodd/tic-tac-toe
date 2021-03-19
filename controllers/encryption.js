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

  const decryptPassword = (user, password) => {
    let saltedPassword = user.password;
    let saltIndex = password.length - 1;
    let encryptedPassword = "";
    let salt = "";
    // Split encrypted string at length of password
    for (let i = 0; i < password.length; i++) {
      encryptedPassword += saltedPassword[i];
    }
    for (let i = saltIndex; i < saltedPassword.length; i++) {
      salt += saltedPassword[i];
    }
    console.log(`saltedPassword:${saltedPassword}`);
    console.log(`encryptedPassword:${encryptedPassword}`);
    console.log(`salt:${salt}`);

    let shiftKey = [];
    // Establish shiftKey
    for (let i = 0; i < password.length; i++) {
      for (let k = 0; k < alphanumerics.length; k++) {
        if (password[i] == alphanumerics[k]) {
          console.log(`match\n ${alphanumerics[k]} index: ${k}`);
          shiftKey.push(k);
        };
      };
    };
    console.log(shiftKey);

    let shift = [];
    for (let i = 0; i < encryptedPassword.length; i++) {
      for (let k = 0; k < alphanumerics.length; k++) {
        if (encryptedPassword[i] == alphanumerics[k]) {
          console.log(`match\n ${alphanumerics[k]} index: ${k}`);
          shift.push(k);
        };
      };
    };
    console.log(shift);

    let decryptedPassword = "";
    for (let i = 0; i < password.length; i++) {
      shift[i] -= shiftKey[i]
      if (shift[i] < 0) {
        shift[i] += alphanumerics.length;
      }
      decryptedPassword += alphanumerics[i];
    }
    console.log(decryptedPassword);

  };



  return {
    alphanumerics,
    generateEncryptedPassword,
    decryptPassword,
  };
})();