const selectionSort = (arr, callback) => {
  if (typeof callback !== 'function') {
    callback = (a, b) => a - b;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (callback(arr[minIdx], arr[j]) > 0) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      let temp = arr[minIdx];
      arr[minIdx] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}
module.exports = selectionSort;