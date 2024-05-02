function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map((char, index, array) =>
      array.indexOf(char) === array.lastIndexOf(char) ? '(' : ')'
    )
    .join('');
}

console.log(duplicateEncode('din'));
