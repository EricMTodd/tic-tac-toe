const encryptionController = (() => {
  const alphanumerics = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const key = "pilot";


  const encrypt = (password) => {
    let encryptedPassword = "";
    let passwordLettersIndexes = [];
    let keyLettersIndexes = [];
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
      for (let i = 0; i < key.length; i++) {
        // console.log(key[i]);
        for (let j = 0; j < alphanumerics.length; j++) {
          // console.log(alphanumerics[j]);
          if (key[i] == alphanumerics[j]) {
            keyLettersIndexes.push(j);
            console.log(`${key[i]}: ${j}`)
          }
        }
      }
      console.log(keyLettersIndexes);
    })();

    (() => {
      let i = 0;
      let j = 0;

      while (i < password.length) {

        let shiftedIndex = passwordLettersIndexes[i] + keyLettersIndexes[j];

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
        if (j < key.length - 1) {
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

    return encryptedPassword;
  // End of encrypt function
  };




  const decrypt = () => {
    // Just use a static password and key for now.
  };

  return {
    alphanumerics,
    encrypt,
  };
})();