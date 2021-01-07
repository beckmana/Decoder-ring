function polybius(input, encode = true) {
    const polybiusSq = {
        a: "11",
        b: "21",
        c: "31",
        d: "41",
        e: "51",
        f: "12",
        g: "22",
        h: "32",
        i: "42",
        j: "42",
        k: "52",
        l: "13",
        m: "23",
        n: "33",
        o: "43",
        p: "53",
        q: "14",
        r: "24",
        s: "34",
        t: "44",
        u: "54",
        v: "15",
        w: "25",
        x: "35",
        y: "45",
        z: "55",
    };
    
    let output = "";
    const input1 = input.toLowerCase();

    if (encode) {
        for (let i = 0; i < input1.length; i++) {
            const char = input1[i];
            //if char is a letter 
             if (polybiusSq[char]) {
                output += polybiusSq[char];
            } else { //if char is NOT a letter
                 output += char;
            }
        }
    } else {
        const input2 = input.split(' '); //if secret message is more than 1 word, split into individual words
        let newArr = []; //decoded array

        //if there is odd number of characters excluding spaces return false
        if (input2.join('').length % 2 !== 0) return false; 
       
        for (let j = 0; j < input2.length; j++){ 
            //loop over each string in array
            let currentStr = input2[j];
            let output1 = ""; //holds the decoded word

            for (let i = 0; i < currentStr.length; i += 2) {
                //loop over every 2 chars in each string
                //group the secret message numbers in groups of 2
                let num = `${currentStr[i]}${currentStr[i + 1]}`;
                if (num === '42') {
                    output1 += '(i/j)';
                } else {
                    const findLetter = Object.keys(polybiusSq).find(letter => {
                        const value = polybiusSq[letter];
                        return value === num;
                    })
                    output1 += findLetter; 
                }
            }
            newArr.push(output1); //push each decoded word into array
        }
        output += newArr.join(" "); //change array back into string
    }
    return output;
}


module.exports = polybius;
