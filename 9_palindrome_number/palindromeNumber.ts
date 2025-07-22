const num1: number = 121;
const num2: number = -121;
const num3: number = 10;
const num4: number = 9;

function isPalindrome(x: number): boolean {
  let num = x;
  let reversed = 0;
  if (num < 0 || num % 10 == 0) {
    return false;
  }
  if (num >= 0 && num < 10) {
    return true;
  }
  while (num > reversed) {
    let lastDigit = num % 10;
    reversed = reversed * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  if (num === reversed || num === Math.floor(reversed/ 10)) {
    return true;
  }

  return false;
}

console.log(`${num1} : ${isPalindrome(num1)}`);
console.log(`${num2} : ${isPalindrome(num2)}`);
console.log(`${num3} : ${isPalindrome(num3)}`);
console.log(`${num4} : ${isPalindrome(num4)}`);
