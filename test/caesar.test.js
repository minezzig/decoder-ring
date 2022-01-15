// Write your tests here!
const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar() submission tests written by Greg", () => {
  describe("returns false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
    it("returns 0 if the shift value is equal to 0", () => {
      const shift = 0;
      const actual = caesar("zero", shift);
      expect(actual).to.be.false;
    });

    it("should return 0 if the shift value is less than -25", () => {
      const shift = -27;
      const actual = caesar("less than", shift);
      expect(actual).to.be.false;
    });

    it("should return 0 if the shift value is greater than 25", () => {
      const shift = 27;
      const actual = caesar("greater than", shift);
      expect(actual).to.be.false;
    });

    it("should return 0 if the shift isn't present", () => {
      const actual = caesar("not present");
      expect(actual).to.be.false;
    });
  });

  describe("capital letters", () => {
    it("should ignore capital letters", () => {
      expect(caesar("HELLO", 3)).to.equal(caesar("hello", 3));
    });
  });

  describe("wrapping around the alphabet", () => {
    it('should wrap to the start of the alphabet if it surpasses "z"', () => {
      const message = "zebra";
      const actual = caesar(message, 3);
      const expected = "cheud";
      expect(actual).to.equal(expected);
    });
  });

  describe("spacing and nonalphabetic symbols", () => {
    it("should maintain spaces and symbols when encoding", () => {
      const actual = caesar("Oh, wow!", 7);
      const expected = "vo, dvd!";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and symbols when decoding", () => {
      const actual = caesar("vo, dvd!", 7, false);
      const expected = "oh, wow!";
      expect(actual).to.equal(expected);
    });
  });
});
