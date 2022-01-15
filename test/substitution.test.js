// Write your tests here!
const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution() submission tests written by Greg", () => {
  describe("length of given alphabet", () => {
    it("should return false if length of alphabet isn't exactly 26 characters", () => {
      const alphabet = "plmoknij";
      const actual = substitution("message", alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("translates correctly", () => {
    it("should translate phrase correctly based on given alphabet", () => {
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution("message", alphabet);
      const expected = "ykrrpik";
      expect(actual).to.equal(expected);
    });
  });

  describe("duplicate characters", () => {
    it("should return false if there are any duplicate characters", () => {
      const alphabet = "plmoknijbuhvygctfxrdzeswaa";
      const actual = substitution("message", alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("spacing and capitals", () => {
    it("should maintain spaces in the message after encoding", () => {
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const message = "message message";
      const actual = substitution(message, alphabet);
      const expected = "ykrrpik ykrrpik";
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message after decoding", () => {
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const message = "ykrrpik ykrrpik";
      const actual = substitution(message, alphabet, false);
      const expected = "message message";
      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const message = "MESSAGE";
      const actual = substitution(message, alphabet);
      expect(actual).to.equal("ykrrpik");
    });
  });
});
