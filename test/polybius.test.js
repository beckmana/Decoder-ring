// Write your tests here!
const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
    it("should encode a message", () => {
        const actual = polybius("thinkful");
        const expected = "4432423352125413";
        expect(actual).to.equal(expected);
    })
    it("should decode a message", () => {
        const actual = polybius("4432423352125413", false);
        const expected = 'th(i/j)nkful';
        expect(actual).to.equal(expected);
    })
    it("should encode a message ignoring spaces, capital letters, and other characters", () => {
        const actual = polybius("Hello world");;
        const expected = '3251131343 2543241341';
        expect(actual).to.equal(expected);
    })
    it("should decode a message ignoring spaces, capital letters, and other characters", () => {
        const actual = polybius("3251131343 2543241341", false);
        const expected = 'hello world';
        expect(actual).to.equal(expected)
    })
    it("should return false if the number of characters in the string excluding spaces is odd", () => {
        const actual = polybius("44324233521254134", false);
        const expected = false;
        expect(actual).to.equal(expected)
    })
    it("should decode a message with spaces and i/j", () => {
        const actual = polybius("111351354234 21513152231133 4234 3211535345 44324234 2543245234", false);
        const expected = "alex(i/j)s beckman (i/j)s happy th(i/j)s works";
        expect(actual).to.equal(expected)
    })
})

describe("polybius()", () => {
    describe("encoding a message", () => {
      it("should encode a message by translating each letter to number pairs", () => {
        const message = "message";
        const actual = polybius(message);
        const expected = "23513434112251";
  
        expect(actual).to.equal(expected);
      });
  
      it("should translate both 'i' and 'j' to 42", () => {
        const message = "jiggle";
        const actual = polybius(message);
        const expected = "424222221351";
  
        expect(actual).to.equal(expected);
      });
  
      it("should leave spaces as is", () => {
        const message = "my message";
        const actual = polybius(message);
        const expected = "2345 23513434112251";
  
        expect(actual).to.equal(expected);
      });
    });
  
    describe("decoding a message", () => {
      it("should decode a message by translating each pair of numbers into a letter", () => {
        const message = "23513434112251";
        const actual = polybius(message, false);
        const expected = "message";
  
        expect(actual).to.equal(expected);
      });
  
      it("should translate 42 to both 'i' and 'j'", () => {
        const message = "424222221351";
        const actual = polybius(message, false);
  
        expect(actual).to.include("i");
        expect(actual).to.include("j");
      });
  
      it("should leave spaces as is", () => {
        const message = "2345 23513434112251";
        const actual = polybius(message, false);
        const expected = "my message";
  
        expect(actual).to.equal(expected);
      });
  
      it("should return false if the length of all numbers is odd", () => {
        const message = "2345 235134341122514";
        const actual = polybius(message, false);
  
        expect(actual).to.be.false;
      });
    });
  });
  