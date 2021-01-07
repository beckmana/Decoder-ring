// Write your tests here!
const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
    it("should encode a message", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw';
        const expected = 'jrufscpw';
        expect(actual).to.equal(expected);
    })
    it("should encode a message ignoring spaces, capital letters, and other characters", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected);
    })
    it("should decode a message", () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful';
        const expected = 'thinkful';
        expect(actual).to.equal(expected);
    })
    it("should return false if the number of characters in the given alphabet is less than 26", () => {
        const actual = substitution("thinkful", "short");
        const expected = false;
        expect(actual).to.equal(expected)
    })
    it("should return false if a letter in the alphabet is repeated", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");;
        const expected = false;
        expect(actual).to.equal(expected)
    })
})