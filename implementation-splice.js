Array.prototype.mySplice = function (index, numberOfElements) {
  if (index === -1) return [...this];

  const preFixPart = this.slice(0, index);
  const postFixPart = this.slice(index + numberOfElements);

  return [...preFixPart, ...postFixPart];
};

const arr = [10, 20, 30, 40];

console.log(arr.mySplice(-1, 1));
