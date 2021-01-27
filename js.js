function checkpalindrome() {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'it is not a palindrome';
            
        }
        
    }
      return 'It is a palindrome';
}
const string = prompt('Enter a string:');
const value = checkpalindrome(string);
console.log(value);