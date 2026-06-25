const findSecondLargestElement = (input) => {
  let largest = input[0];
  let secondLargest = -Infinity;

  for (let i = 1; i < input.length; i++) {
    if (largest < input[i]) {
      secondLargest = largest;
      largest = input[i];
    } else if (input[i] < largest && input[i] > secondLargest) {
      secondLargest = input[i];
    }
  }

  return secondLargest;
};

const input = [3, 2, 1, 5, 2];
console.log(findSecondLargestElement(input));
