const palindrome = (str) => {
  const solution = true;

  let start = 0, end = str.length -1;

  while (start < end) {
    // ignore Ignore punctuation marks, spaces
    while (!isAlphaNumeric(str[start])) {
      start++
    }
    while (!isAlphaNumeric(str[end])) {
      end--
    }

    if (str[start].toLowerCase() === str[end].toLowerCase()) {
      start++;
      end--;
      continue;
    }
    return false;
  }

  return solution;
}

const isAlphaNumeric = (char) => {
  return /[a-zA-Z0-9]/.test(char);
}

console.log(palindrome("Complete the project report"))
console.log(palindrome("Madam, in Eden, I'm Adam"))