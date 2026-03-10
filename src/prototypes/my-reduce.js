Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (typeof callbackFn !== "function") {
    throw new TypeError(callbackFn + " is not a function");
  }

  const arr = this;
  let accumulator;
  let startIndex;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    if (arr.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = arr[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < arr.length; i++) {
    if (arr[i] === null || arr[i] === undefined) {
      continue;
    }

    accumulator = callbackFn(accumulator, arr[i], i, arr);
  }

  return accumulator;
};
