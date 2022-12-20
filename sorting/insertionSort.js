const insertionSort = (arr, callback) => {
  if (typeof callback !== 'function') {
    callback = (a, b) => a - b;
  }
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && callback(arr[j], currentVal) > 0; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

module.exports = insertionSort;