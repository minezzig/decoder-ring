// Write your tests here!
const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius() submission tests written by Greg", () => {
  describe('"i" and "j" conversion', () => {
    it('should encode "i" and "j" to 42', () => {
      const message = "Hi John";
      const actual = polybius(message);
      const expected = "3242 42433233";
      expect(actual).to.equal(expected);
    });

    it('should decode 42 to "(i/j)"', () => {
      const message = "3242 42433233";
      const actual = polybius(message, false);
      const expected = "h(i/j) (i/j)ohn";
      expect(actual).to.equal(expected);
    });
  });

  describe("capital letters", () => {
    it("should ignore capital letters", () => {
      const message = "MESSAGE";
      const actual = polybius(message);
      const expected = "23513434112251";
      expect(actual).to.equal(expected);
    });
  });

  describe("spacing", () => {
    it("should maintain spaces when encoding", () => {
      const message = "This has spaces";
      const actual = polybius(message);
      const expected = "44324234 321134 345311315134";
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces when decoding", () => {
      const message = "44324234 321134 345311315134";
      const actual = polybius(message, false);
      const expected = "th(i/j)s has spaces";
      expect(actual).to.equal(expected);
    });
  });
});
