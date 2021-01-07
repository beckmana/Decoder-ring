function substitution(input, alphabet, encode = true) {
    if (!alphabet) return false;
    if (alphabet.length < 26) return false;
    let realAlpha = "abcdefghijklmnopqrstuvwxyz";
    const alphaKey = {}; //make object key to encode and decode
    for (let i = 0; i < alphabet.length; i++){
        if (alphaKey[alphabet[i]] === alphabet[i]) {
            return false //if key already exists, return false (if alaphbet letters repeat)
        } else {
            alphaKey[alphabet[i]] = realAlpha[i];
        }
    }

    let output = "";
    const input1 = input.toLowerCase();

    for (let i = 0; i < input1.length; i++){
        const char = input1[i];
        //if char is a letter
        if (alphabet.indexOf(char) !== -1) {
            Object.keys(alphaKey).forEach(key => {
                //loop over object to find the matching key or value to encode or decode
                const value = alphaKey[key];
                if (encode) {
                    if (value === char) output += key;
                } else {
                    if (key === char) output += value;
                }
            })
        } else {
            //if character is NOT a letter (space or special char), add it to the output
            output += input[i];
        }
    }
    return output;
}

module.exports = substitution;
