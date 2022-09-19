function smallestTwoNumbers(arr) {
  let sorted = arr.sort((a, b) => {
    return a - b;
  })
  let smallestNumbers = sorted.slice(0, 2);
  console.log(smallestNumbers);
}
smallestTwoNumbers([30, 15, 50, 5])