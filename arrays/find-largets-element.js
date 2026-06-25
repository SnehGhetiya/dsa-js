const findLargestElement = (input) => {
  let largest = input[0];
  for (let i = 1; i < input.length; i++) {
    if (largest < input[i]) {
      largest = input[i];
    }
  }

  return largest;
};

const input = [3, 2, 1, 5, 2];

console.log(findLargestElement(input));
