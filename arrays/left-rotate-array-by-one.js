const leftRotateArrayByOne = (nums) => {
  let firstValue = nums[0];

  for (let j = 1; j < nums.length; j++) {
    nums[j - 1] = nums[j];
  }

  nums[nums.length - 1] = firstValue;

  return nums;
};

const input = [1, 2, 3, 4, 5];

console.log(leftRotateArrayByOne(input));
