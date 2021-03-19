const encryptionController = (() => {
  const alphanumerics = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";
  const password = "GetRektLoser69420";
  const shift = "pilot";

  const encrypt = () => {
    let phraseLettersIndexes = [];
    let shiftLettersIndexes = [];

    for (let i = 0; i < password.length; i++) {
      for (let j = 0; j < alphanumerics.length; j++) {
        if (password[i] == alphanumerics[j]) {
          phraseLettersIndexes.push(j);
          console.log(`${password[i]}: ${j}`)
        }
      }
    }
    console.log(phraseLettersIndexes);

    // for (let i = 0; i < shift.length; i++) {
    //   if (i > shift.length)
    // }
  };

  const decrypt = () => {
    // Just use a static phrase and key for now.
  };

  return {
    encrypt,
  };
})();