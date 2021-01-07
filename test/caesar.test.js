// Write your tests here!

const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    it("should encode a message given a valid positive shift", () => {
        const actual = caesar("thinkful", 3);
        const expected = 'wklqnixo';
        expect(actual).to.equal(expected);
    })
    it("should encode a message given a valid negative shift", () => {
        const actual = caesar("thinkful", -3);
        const expected = 'qefkhcri';
        expect(actual).to.equal(expected);
    })
    it("should decode a message given valid correct shift", () => {
        const actual = caesar("wklqnixo", 3, false);
        const expected = 'thinkful';
        expect(actual).to.equal(expected);
    })
    it("should encode and decode a message ignoring spaces, capital letters, and other characters", () => {
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        const expected = 'this is a secret message!'
        expect(actual).to.equal(expected)
    })
    it("should return false if no shift is given", () => {
        const actual = caesar("thinkful");
        const expected = false;
        expect(actual).to.equal(expected)
    })
    it("should return false if the shift is greater than 25", () => {
        const actual = caesar("thinkful", 99);
        const expected = false;
        expect(actual).to.equal(expected)
    })
    it("should return false if the shift is less than -25", () => {
        const actual = caesar("thinkful", -26);
        const expected = false;
        expect(actual).to.equal(expected)
    })
    it("should return false if the shift is 0", () => {
        const actual = caesar("thinkful", 0);
        const expected = false;
        expect(actual).to.equal(expected)
    })
})

describe("caesar()", () => {
    describe("error handling", () => {
      it("should return false if the shift amount is 0", () => {
        const message = "zebra magazine";
        const shift = 0;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
      });
  
      it("should return false if the shift amount is above 25", () => {
        const message = "zebra magazine";
        const shift = 26;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
      });
  
      it("should return false if the shift amount is less than -25", () => {
        const message = "zebra magazine";
        const shift = -26;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
      });
    });
  
    describe("encoding a message", () => {
      it("should encode a message by shifting the letters", () => {
        const message = "message";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "phvvdjh";
  
        expect(actual).to.equal(expected);
      });
  
      it("should leaves spaces and other symbols as is", () => {
        const message = "a message.";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "d phvvdjh.";
  
        expect(actual).to.equal(expected);
      });
  
      it("should ignore capital letters", () => {
        const message = "A Message";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "d phvvdjh";
  
        expect(actual).to.equal(expected);
      });
  
      it("should appropriately handle letters at the end of the alphabet", () => {
        const message = "zebra magazine";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "cheud pdjdclqh";
  
        expect(actual).to.equal(expected);
      });
  
      it("should allow for a negative shift that will shift to the left", () => {
        const message = "zebra magazine";
        const shift = -3;
        const actual = caesar(message, shift);
        const expected = "wbyox jxdxwfkb";
  
        expect(actual).to.equal(expected);
      });
    });
  
    describe("decoding a message", () => {
      it("should decode a message by shifting the letters in the opposite direction", () => {
        const message = "phvvdjh";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "message";
  
        expect(actual).to.equal(expected);
      });
  
      it("should leaves spaces and other symbols as is", () => {
        const message = "d phvvdjh.";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "a message.";
  
        expect(actual).to.equal(expected);
      });
  
      it("should ignore capital letters", () => {
        const message = "D pHvvdjh";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "a message";
  
        expect(actual).to.equal(expected);
      });
  
      it("should appropriately handle letters at the end of the alphabet", () => {
        const message = "cheud pdjdclqh";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "zebra magazine";
  
        expect(actual).to.equal(expected);
      });
  
      it("should allow for a negative shift that will shift to the left", () => {
        const message = "wbyox jxdxwfkb";
        const shift = -3;
        const actual = caesar(message, shift, false);
        const expected = "zebra magazine";
  
        expect(actual).to.equal(expected);
      });
    });
  });
