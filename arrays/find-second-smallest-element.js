const findSecondSmallestElement = (input) => {
  let smallest = input[0];
  let secondSmallest = Infinity;

  for (let i = 1; i < input.length; i++) {
    if (smallest > input[i]) {
      secondSmallest = smallest;
      smallest = input[i];
    } else if (input[i] !== smallest && input[i] < secondSmallest) {
      secondSmallest = input[i];
    }
  }

  return secondSmallest;
};

const input = [3, 2, 1, 5, 2];
console.log(findSecondSmallestElement(input));
