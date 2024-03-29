// function reverseWords(str) {
//   const words = str.split(' ');
// //   console.log(words);
//   const reversedWords = words.map((word) => word.split('').reverse().join(''));
// //   console.log(reversedWords);
//   const result = reversedWords.join(' ');
// //   console.log(result);
//   return result;
// }
// reverseWords('The greatest');

// function filter_list(l) {
//   return l.filter((item) => typeof item === 'number');
// }

// console.log(filter_list([1, 2, 'a', 'b', 3 , 'c', 'd', 'e', 'f']));

// function addBinary(a, b) {
//   const result = a + b;
//   return result.toString(2);
// }

// console.log(addBinary(1, 7));

function accum(s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
    result += i < s.length - 1 ? '-' : '';
  }

    return result;
}

console.log(accum('abcd'));

// function findMissingLetter(array) {
//   for (i = 0; i < array.length - 1; i++) {
//     if (array[i + 1].charCodeAt(0) - array[i].charCodeAt(0) > 1) {
//       return String.fromCharCode(array[i].charCodeAt(0) + 1);
//     }
//   }
//   return ' ';
// }
// console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
// print(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
