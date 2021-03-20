const encryptionController = (() => {
  const alphanumerics = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const encrypt = (password, salt) => {
    let encryptedPassword = "";
    let passwordLettersIndexes = [];
    let saltLettersIndexes = [];
    let saltedEncryption = "";
    let shiftLettersIndexes = [];

    (() => {
      for (let i = 0; i < password.length; i++) {
        for (let j = 0; j < alphanumerics.length; j++) {
          if (password[i] == alphanumerics[j]) {
            passwordLettersIndexes.push(j);
            console.log(`${password[i]}: ${j}`)
          }
        }
      }
      console.log(passwordLettersIndexes);
    })();


    (() => {
      for (let i = 0; i < salt.length; i++) {
        // console.log(salt[i]);
        for (let j = 0; j < alphanumerics.length; j++) {
          // console.log(alphanumerics[j]);
          if (salt[i] == alphanumerics[j]) {
            saltLettersIndexes.push(j);
            console.log(`${salt[i]}: ${j}`)
          }
        }
      }
      console.log(saltLettersIndexes);
    })();

    (() => {
      let i = 0;
      let j = 0;

      while (i < password.length) {

        let shiftedIndex = passwordLettersIndexes[i] + saltLettersIndexes[j];

        if (shiftedIndex > alphanumerics.length) {
          shiftedIndex -= alphanumerics.length;
          console.log("2nd round", shiftedIndex)
        } else {
          console.log("1st round", shiftedIndex);
        }

        shiftLettersIndexes.push(shiftedIndex);

        if (i < password.length - 1) {
          console.log(`i: ${i}`);
          i++;
        } else {
          console.log(`i: ${i}`);
          i++;
        }
        if (j < salt.length - 1) {
          console.log(`j: ${j}`);
          j++;
        } else {
          console.log(`j: ${j}`);
          j = 0;
        }
      }; // End of while loop
      console.log(`shiftLettersIndexes: ${shiftLettersIndexes}`);
    })();

    (() => {
      for (let i = 0; i < password.length; i++) {
        for (let j = 0; j < alphanumerics.length; j++) {
          if (shiftLettersIndexes[i] === j) {
            encryptedPassword += alphanumerics[j]
          }
        }
      }
    })();

    console.log(`encryptedPassword: ${encryptedPassword}\nsalt: ${salt}`);
    saltedEncryption = encryptedPassword + salt;
    return saltedEncryption;
    // End of encrypt function
  };

  const generateEncryption = (password) => {
    // Make some salt yo
    let saltLetterIndexes = [];
    let salt = "";

    // Generate saltKey
    (() => {
      let saltLength = Math.floor(Math.random() * 12) + 9;
      console.log(`saltLength: ${saltLength}`);
      for (let i = 0; i < saltLength; i++) {
        saltLetterIndexes.push(Math.floor(Math.random() * alphanumerics.length) + 1);
      }
      console.log(saltLetterIndexes);
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
      console.log(salt);
    })();
    return encrypt(password, salt);
  }


  const decrypt = () => {
    // Just use a static password and salt for now.
  };

  return {
    alphanumerics,
    generateEncryption,
  };
})();