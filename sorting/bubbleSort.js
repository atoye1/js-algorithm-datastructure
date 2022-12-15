const bubbleSort = (arr, callback) => {
  if (typeof callback !== 'function') {
    callback = (a, b) => a - b;
  }
  for (let i = arr.length - 1; i > 0; i--) {
    let swapped = false;
    for (let j = 0; j < i; j++) {
      if (callback(arr[j], arr[j + 1]) > 0) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) return arr;
  }
  return arr;
}
module.exports = bubbleSort;