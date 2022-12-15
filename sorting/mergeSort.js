const merge = (arr1, arr2, callback) => {
  if (typeof callback !== 'function') {
    callback = (a, b) => a - b;
  }
  const result = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if (callback(arr1[p1], arr2[p2]) > 0) {
      result.push(arr2[p2++]);
    } else {
      result.push(arr1[p1++]);
    }
  }
  while (p1 < arr1.length) {
    result.push(arr1[p1++]);
  }
  while (p2 < arr2.length) {
    result.push(arr2[p2++]);
  }
  return result;
}

const mergeSort = (arr, callback) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid), callback), mergeSort(arr.slice(mid), callback), callback);
}
module.exports = mergeSort;