// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphabetArray = [
    { letter: "a", number: 11 },
    { letter: "b", number: 21 },
    { letter: "c", number: 31 },
    { letter: "d", number: 41 },
    { letter: "e", number: 51 },
    { letter: "f", number: 12 },
    { letter: "g", number: 22 },
    { letter: "h", number: 32 },
    { letter: "i", number: 42 },
    { letter: "j", number: 42 },
    { letter: "k", number: 52 },
    { letter: "l", number: 13 },
    { letter: "m", number: 23 },
    { letter: "n", number: 33 },
    { letter: "o", number: 43 },
    { letter: "p", number: 53 },
    { letter: "q", number: 14 },
    { letter: "r", number: 24 },
    { letter: "s", number: 34 },
    { letter: "t", number: 44 },
    { letter: "u", number: 54 },
    { letter: "v", number: 15 },
    { letter: "w", number: 25 },
    { letter: "x", number: 35 },
    { letter: "y", number: 45 },
    { letter: "z", number: 55 },
  ];

  function polybius(input, encode = true) {
    // if  DECODE is toggled, do the following.
    if (!encode) {
      //check to make sure there are an even amount of digits, if not return false;
      if (input.split(" ").join("").length % 2) return false;
      const output = [];
      // loop through numeric message
      for (let i = 0; i < input.length; i += 2) {
        // if a space is found, push that space to the output
        if (input[i] === " ") {
          output.push(" ");
          // add one to the position to offset the one space, rather than two digits.
          i++;
        }
        // sets current number to be two digits by adding one to index, also makes it a number value
        const currentNumber = parseInt(input[i] + input[i + 1]);
        // loop through alphabet array looking for matching number
        for (let alpha in alphabetArray) {
          const currentAlpha = alphabetArray[alpha];
          if (currentAlpha.number === currentNumber) {
            // if the number is 42, push i/j.  check for "i" so that it doesn't repeat the letter twice.
            if (currentNumber === 42 && currentAlpha.letter === "i") {
              output.push("(i/j)");
              break;
            } else {
              if (currentAlpha.letter != "j") {
                output.push(currentAlpha.letter);
                break;
              }
            }
          }
        }
      }
      //return the answer as a string
      return output.join("");
    }

    // capital letters can be ignored
    input = input.toLowerCase();
    input = input.split("");
    const output = [];
    // cycle through each letter of word
    for (let i = 0; i < input.length; i++) {
      const currentLetter = input[i];
      // if a space is found, add that space to the answer
      if (currentLetter === " ") {
        output.push(currentLetter);
      } else {
        //loop through alphabet array looking for letter
        for (let alpha in alphabetArray) {
          let currentAlpha = alphabetArray[alpha];
          // if a match is found, add that corresponding digits to the answer
          if (currentAlpha.letter === currentLetter) {
            output.push(currentAlpha.number);
            break;
          }
        }
      }
    }
    //return the answer as a string
    return output.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
