function firstNonRepeatingLetter(s) {
    s2 = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        if (s2.indexOf(s2[i]) === s2.lastIndexOf(s2[i])) {
            return s[i];
        }
    }
    return '';

}

console.log(firstNonRepeatingLetter('a'));
console.log(firstNonRepeatingLetter('streSS'));
console.log(firstNonRepeatingLetter(''));
