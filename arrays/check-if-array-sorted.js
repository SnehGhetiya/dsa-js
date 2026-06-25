const checkIfArrayIsSorted = (numArray) => {
  for (let i = 1; i <= numArray.length - 1; i++) {
    if (numArray[i] >= numArray[i - 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

const input = [1, 2, 3, 4, 5];
console.log(checkIfArrayIsSorted(input));
