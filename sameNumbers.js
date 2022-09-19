function sameNumbers(num) {
  let digits = num.toString().split('');
  let realDigits = digits.map(Number);
  let firstDigit = realDigits[0];
  let sum = realDigits.reduce((a, b) => a + b);
  for (let i = 1; i < realDigits.length; i++) {
    if (realDigits[i] !== firstDigit) {
      console.log(false);
      console.log(sum);
      return;
    }
  }
  console.log(true);
  console.log(sum);
  return;
}
sameNumbers(2222222)