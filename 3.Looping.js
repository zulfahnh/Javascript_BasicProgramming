'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

function isVowel(c) {
    return "aeiou".indexOf(c) !== -1;
}

function vowelsAndConsonants(s) {
   let vowels = [];
   let consonants = [];
    
    for (let e of s) {
        if (isVowel(e)) {
            // Append each vowel to the vowel array
            vowels.push(e);
        } 
        else {
            // Append each consonant to the consonant array
            consonants.push(e);
        }
    }
    // Append the array of consonants to the array of vowels
    vowels.push(...consonants);
    
    // Print each vowel in order, followed by each consonant in order
    for (let e of vowels) {
        console.log(e);
    }
}

