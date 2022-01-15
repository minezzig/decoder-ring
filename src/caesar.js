// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabetArray = [
    { letter: "a", number: 1 },
    { letter: "b", number: 2 },
    { letter: "c", number: 3 },
    { letter: "d", number: 4 },
    { letter: "e", number: 5 },
    { letter: "f", number: 6 },
    { letter: "g", number: 7 },
    { letter: "h", number: 8 },
    { letter: "i", number: 9 },
    { letter: "j", number: 10 },
    { letter: "k", number: 11 },
    { letter: "l", number: 12 },
    { letter: "m", number: 13 },
    { letter: "n", number: 14 },
    { letter: "o", number: 15 },
    { letter: "p", number: 16 },
    { letter: "q", number: 17 },
    { letter: "r", number: 18 },
    { letter: "s", number: 19 },
    { letter: "t", number: 20 },
    { letter: "u", number: 21 },
    { letter: "v", number: 22 },
    { letter: "w", number: 23 },
    { letter: "x", number: 24 },
    { letter: "y", number: 25 },
    { letter: "z", number: 26 },
  ];
  function caesar(input, shift, encode = true) {
    // your solution code here
    // if shift isn't given, or is out of range, returns false immediately
    if (!shift || shift > 25 || shift < -25) return false;
    //switches to decode mode by changing the shift direction
    if (encode === false) shift = -shift;

    // creates an array from the given message with only lowercase letters
    const originalMessage = input.toLowerCase().split("");
    const secretMessage = [];

    // starts a loop for each character in given message
    for (let i = 0; i < originalMessage.length; i++) {
      const currentLetter = originalMessage[i];

      // loops through alphabet array looking for a match to the message character
      for (let alpha in alphabetArray) {
        const currentAlpha = alphabetArray[alpha];
        //if the letters match, it shifts from the current index and gets the new letter
        if (currentAlpha.letter === currentLetter) {
          let index = alphabetArray.indexOf(currentAlpha) + shift;
          // if shift passes Z, it will wrap around to the start of the alphabet
          if (index > 25) {
            index -= 26;
          }
          // if shift goes negative beyond A, wraps to end of the alphabet
          if (index < 0) {
            index += 26;
          }
          const newLetter = alphabetArray[index].letter;
          secretMessage.push(newLetter);
        }
      }
      // if the letter is never found, it must be a space or symbol, so just keep that from original array
      if (!secretMessage[i]) secretMessage.push(currentLetter);
    }
    // return the secretMessage joined together as a string
    return secretMessage.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
