function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;
    if (!encode) shift = -shift;
    if (shift < 0) shift += 26;


    let output = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const input1 = input.toLowerCase();

    // loop over all characters in input        
    for (let i = 0; i < input1.length; i++) {
        let char = input1[i]
        //if letter, shift 
        if (alphabet.indexOf(char) !== -1) {
            const currentLetter = alphabet.indexOf(char);
            let newLetter = (currentLetter + shift) % 26;       
            output += alphabet[newLetter];
        } else {
            //if character is NOT a letter (space or special char), add it to the output
            output += input[i];
        }
    }
    return output;
}

module.exports = caesar;
