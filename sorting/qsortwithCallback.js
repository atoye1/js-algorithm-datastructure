function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  // good luck!
  if (typeof comparator !== 'function') {
    comparator = (a, b) => a - b;
  }
  const pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (comparator(pivot, arr[i]) > 0) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx;
}

function quickSort(arr, comparator, start = 0, end = arr.length - 1) {
  // good luck!
  if (start < end) {
    // by calling pivot(), pivot is placed at correct position
    const pivotIdx = pivot(arr, comparator, start, end);
    quickSort(arr, comparator, start, pivotIdx - 1);
    quickSort(arr, comparator, pivotIdx + 1, end)
  }
  return arr;
}