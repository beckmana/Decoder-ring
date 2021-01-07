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
