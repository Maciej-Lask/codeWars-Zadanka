function scramble(str1, str2) {
  const counter1 = {};
  for (let char of str1) {
    if (counter1[char]) {
      counter1[char]++;
    } else {
      counter1[char] = 1;
    }
  }

  for (let char of str2) {
    if (!counter1[char] || counter1[char] === 0) {
      return false;
    }
    counter1[char]--;
  }

  return true;
}
