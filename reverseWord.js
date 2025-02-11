//Description:
//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//My Solution:

function reverseWords(str) {
    // Go for it
    revStr = str.split('').reverse('').join('').split(' ').reverse().join(' ')
    return revStr
  }
  