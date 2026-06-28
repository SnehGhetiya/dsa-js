const checkIfArrayIsSortedAndRotated = (nums) => {
  let count = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) {
      count++;
    }
  }
  return count <= 1;
};

const input1 = [3, 4, 5, 1, 2];
const input2 = [1, 2, 3, 4, 5];
const input3 = [1, 3, 2];

console.log(
  "Is [3, 4, 5, 1, 2] sorted and rotated?",
  checkIfArrayIsSortedAndRotated(input1),
);
console.log(
  "Is [1, 2, 3, 4, 5] sorted and rotated?",
  checkIfArrayIsSortedAndRotated(input2),
);
console.log(
  "Is [1, 3, 2] sorted and rotated?",
  checkIfArrayIsSortedAndRotated(input3),
);

console.log(1 % 5);
