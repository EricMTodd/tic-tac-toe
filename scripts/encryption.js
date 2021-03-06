const encryptionController = (() => {
  const alphanumerics = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[{]}\|,<.>/?`~";

  const encrypt = (password, salt) => {
    // Crucial variables
    let encryptedPassword = "";
    let passwordLettersIndexes = [];
    let saltLettersIndexes = [];
    let saltedEncryption = "";
    let shiftLettersIndexes = [];

    // Build array of password letter indexes
    (() => {
      for (let i = 0; i < password.length; i++) {
        for (let j = 0; j < alphanumerics.length; j++) {
          if (password[i] == alphanumerics[j]) {
            passwordLettersIndexes.push(j);
          }
        }
      }
    })();

    // Build array of salt letter indexes
    (() => {
      for (let i = 0; i < salt.length; i++) {
        for (let j = 0; j < alphanumerics.length; j++) {
          if (salt[i] == alphanumerics[j]) {
            saltLettersIndexes.push(j);
          }
        }
      }
    })();

    // Build encryption shift array
    (() => {
      let i = 0;
      let j = 0;

      while (i < password.length) {

        let shiftedIndex = passwordLettersIndexes[i] + saltLettersIndexes[j];

        if (shiftedIndex > alphanumerics.length) {
          shiftedIndex -= alphanumerics.length;
        } else {
        }

        shiftLettersIndexes.push(shiftedIndex);

        if (i < password.length - 1) {
          i++;
        } else {
          i++;
        }
        if (j < salt.length - 1) {
          j++;
        } else {
          j = 0;
        }
      }; // End of while loop
    })();

    // Generate full encryption
    (() => {
      for (let i = 0; i < password.length; i++) {
        for (let j = 0; j < alphanumerics.length; j++) {
          if (shiftLettersIndexes[i] === j) {
            encryptedPassword += alphanumerics[j]
          }
        }
      }
    })();

    saltedEncryption = encryptedPassword + salt;
    return saltedEncryption;
    // End of encrypt function
  };

  const generateEncryption = (password) => {
    // Make salt for encryption
    let saltLetterIndexes = [];
    let salt = "";

    // Generate saltKey
    (() => {
      let saltLength = Math.floor(Math.random() * 12) + 9;
      for (let i = 0; i < saltLength; i++) {
        saltLetterIndexes.push(Math.floor(Math.random() * alphanumerics.length) + 1);
      }
    })();

    // create salt from array
    (() => {
      for (let i = 0; i < saltLetterIndexes.length; i++) {
        for (let j = 0; j < alphanumerics.length; j++) {
          if (saltLetterIndexes[i] === j) {
            salt += alphanumerics[j];
          };
        };
      };
    })();
    return encrypt(password, salt);
    // End of generateEnccryption function
  }

  const decrypt = (password, user) => {
    let encryptedPasswordLettersIndexes = [];
    let saltLettersIndexes = [];
    let shiftLettersIndexes = [];
    let decryptedPassword = "";
    let encryptedPassword = "";
    let salt = "";

    // Split string up the password length and store it in encryptedPassword
    (() => {
      // Find encrypted password
      for (let i = 0; i < password.length; i++) {
        encryptedPassword += user.password[i];
      }

      // Find salt
      for (let i = password.length; i < user.password.length; i++) {
        salt += user.password[i];
      }
    })();

    // Find indexes of letters in password and salt
    (() => {
      for (let i = 0; i < encryptedPassword.length; i++) {
        for (let j = 0; j < alphanumerics.length; j++) {
          if (encryptedPassword[i] === alphanumerics[j]) {
            encryptedPasswordLettersIndexes.push(j)
          }
        }
      }

      for (let i = 0; i < salt.length; i++) {
        for (let j = 0; j < alphanumerics.length; j++) {
          if (salt[i] === alphanumerics[j]) {
            saltLettersIndexes.push(j);
          }
        }
      }
    })();

    // Decrypt password using salt as the key
    (() => {
      let i = 0;
      let j = 0;

      while (i < password.length) {

        let shiftedIndex = encryptedPasswordLettersIndexes[i] - saltLettersIndexes[j];

        if (shiftedIndex < 0) {
          shiftedIndex += alphanumerics.length;
        } else {
        }

        shiftLettersIndexes.push(shiftedIndex);

        if (i < password.length - 1) {
          i++;
        } else {
          i++;
        }
        if (j < salt.length - 1) {
          j++;
        } else {
          j = 0;
        }
      }; // End of while loop
    })();

    // Decrypt password using shift
    (() => {
      for (let i = 0; i < shiftLettersIndexes.length; i++) {
        for (let j = 0; j < alphanumerics.length; j++) {
          if (shiftLettersIndexes[i] === j) {
            decryptedPassword += alphanumerics[j];
          };
        };
      };
    })();

    // Evaluate password
    (() => {
      if (password === decryptedPassword) {
        let storageObject = JSON.parse(localStorage.ticTacToe);
        
        if (storageObject.activePlayerOne === null && storageObject.activePlayerTwo === null) {
          storageObject.activePlayerOne = user;
          storageString = JSON.stringify(storageObject);
          localStorage.setItem("ticTacToe", storageString);
          return window.location.replace('../index.html');
        } else if (storageObject.activePlayerOne === null && storageObject.activePlayerTwo !== null) {
          storageObject.activePlayerOne = user;
          storageString = JSON.stringify(storageObject);
          localStorage.setItem("ticTacToe", storageString);
          return window.location.replace('../index.html');
        } else if (storageObject.activePlayerOne !== null && storageObject.activePlayerTwo === null) {
          storageObject.activePlayerTwo = user;
          storageString = JSON.stringify(storageObject);
          localStorage.setItem("ticTacToe", storageString);
          return window.location.replace('../index.html');
        } else if (user.email === storageObject.activePlayerOne.email || user.email ===   storageObject.activePlayerTwo.email) {
          document.querySelector("#login-email-input").value = "";
          document.querySelector("#login-password-input").value = "";
          return alert("You cannot log the same player in twice.");
        } else {
          return alert("No available player slots. Please log a player out and try again.")
        };
      } else {
        alert("Incorrect password.")
      };
      return decryptedPassword = "";
    })();
    // End of decrypt function
  };

  return {
    alphanumerics,
    decrypt,
    generateEncryption,
  };
})();