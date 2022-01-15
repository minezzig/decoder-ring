// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  // helper function to make the Cipher alphabet object
  function makeCipher(subAlphabet) {
    const regAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
    const subAlpha = subAlphabet.split("");
    const alphaCipher = {};
    regAlpha.forEach((letter, index) => {
      alphaCipher[letter] = subAlpha[index];
    });

    return alphaCipher;
  }

  function substitution(input, alphabet, encode = true) {
    // if no alphabet is given, return false
    if (!alphabet) return false;
    // if alphabet isn't exactly 26 characters, return false
    if (alphabet.length != 26) return false;
    // if alphabet has any repeating characters, return false
    const duplicateTest = alphabet.split("");
    for (let i = 0; i < duplicateTest.length; i++) {
      let counter = 0;
      for (let j = 0; j < duplicateTest.length; j++) {
        if (duplicateTest[i] === duplicateTest[j]) counter++;
        if (counter > 1) return false;
      }
    }

    // call the helper fuction to create an object with the alphabet cipher array
    const alphaCipher = makeCipher(alphabet);
    // remove any capital letters
    input = input.toLowerCase();
    const output = [];

    // decode mode
    if (!encode) {
      for (let i = 0; i < input.length; i++) {
        const currentLetter = input[i];
        // if there are spaces, maintain them in the result
        if (currentLetter === " ") output.push(currentLetter);
        // loop through cipher alphabet and find corresponding character
        for (let alpha in alphaCipher) {
          if (currentLetter === alphaCipher[alpha]) {
            output.push(alpha);
            break;
          }
        }
      }
      // return result in string form
      return output.join("");
    }

    // loop through the given message
    for (let i = 0; i < input.length; i++) {
      let currentLetter = input[i];
      // if there are any spaces, keep them in the answer
      if (currentLetter === " ") output.push(currentLetter);
      //loop through the cipher alphabet looking to match the letter, push the coordinating letter to ouput array
      for (let alpha in alphaCipher) {
        if (currentLetter === alpha) {
          output.push(alphaCipher[alpha]);
          break;
        }
      }
    }
    // convert ouput array into a string
    return output.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
