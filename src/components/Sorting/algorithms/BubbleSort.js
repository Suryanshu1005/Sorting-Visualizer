const bubbleSort = (arr, length) => {
  var result = [];
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j].value > arr[j + 1].value) {
        // Swap arr[j] and arr[j+1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // Set styles for visualization
        arr[j].style = "bar-swap";
        arr[j + 1].style = "bar-swap";
        result.push(JSON.parse(JSON.stringify(arr))); // Push current state to result
      }
    }
  }
  // Marking the entire array as sorted after the loop completes
  arr.forEach((element) => {
    element.style = "bar-sorted";
  });
  result.push(JSON.parse(JSON.stringify(arr))); // Push final state to result
  return result;
};

export default bubbleSort;
