const removeDeuplicateFromSortedArray = (numArray) => {
  if (numArray.length === 0) return numArray;

  let currentIndex = 0;

  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] !== numArray[currentIndex]) {
      currentIndex += 1;
      numArray[currentIndex] = numArray[i];
    }
  }

  return currentIndex + 1;

  // If we have to return and array then
  // return numArray.slice(0, currentIndex + 1);
};

const numArray = [1, 1, 2, 2, 2, 3, 3];

console.log(removeDeuplicateFromSortedArray(numArray));
