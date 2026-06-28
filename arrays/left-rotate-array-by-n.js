const input1 = [1, 2, 3, 4, 5, 6, 7];
const input2 = [1, 2, 3, 4];
const d = 3;

// Helper function as leetcode didn't recognize the reverse function

const reverse = (arr, start, end) => {
  while (start < end) {
    // Swap the elements
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // Move the pointers inward
    start++;
    end--;
  }
};

// Better solution
const leftRotateArrayByN = (nums, d) => {
  let rotation = d % nums.length;

  let temp = nums.slice(0, rotation); // TC: O(k) - where k is rotation value SC: O(k) - where k is rotation value

  for (let i = rotation; i < nums.length; i++) {
    nums[i - rotation] = nums[i];
  } // TC: O(n-k) SC: O(1)

  // To fill up the remaining space we have to calculate index from where we have to fill up the data
  // So we have done it by nums-length - rotation
  // Now to track the index in temp array we have to do the same manipulation
  // so it will become i - (nums.length - rotation) or else you can take j = 0 and increment it on every iterration
  // let j = 0 and take out value at index j from the temp and fill it into the nums.

  for (let i = nums.length - rotation; i < nums.length; i++) {
    nums[i] = temp[i - (nums.length - rotation)];
  } // TC: O(k) SC: O(1)
  return nums;

  //Total Time and Space complexity: O(n) Time and O(k) Space
};

//Optimal Solution
const leftRotateArrayByNOptimal = (nums, d) => {
  const rotation = d % nums.length;

  // 1: Reverse the first k elements
  reverse(nums, 0, rotation - 1); //TC: O(k)

  // 2: Reverse the remaining n-k elements
  reverse(nums, rotation, nums.length - 1); // TC: O(n-k)

  // 3: Reverse the entire array
  reverse(nums, 0, nums.length - 1); // TC: O(n)

  return nums; // Total TC and SC: O(2n) and O(1)
};

const rightRotateArrayByNOptimal = (nums, d) => {
  const rotation = d % nums.length;

  reverse(nums, 0, nums.length - 1);

  reverse(nums, 0, rotation - 1);

  reverse(nums, rotation, nums.length - 1);

  return nums;
};

// console.log(leftRotateArrayByN(input1, d));
// console.log(leftRotateArrayByNOptimal(input2, d));
console.log(rightRotateArrayByNOptimal(input1, d));
