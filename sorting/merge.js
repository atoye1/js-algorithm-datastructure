const merge = (arr1, arr2) => {
  const mergedArr = [];
  let p1 = 0
  let p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      mergedArr.push(arr1[p1]);
      p1++;
    } else {
      mergedArr.push(arr2[p2]);
      p2++;
    }
  }
  while (p1 < arr1.length) {
    mergedArr.push(arr1[p1]);
    p1++;
  }
  while (p2 < arr2.length) {
    mergedArr.push(arr2[p2]);
    p2++;
  }
  return mergedArr;
}


let arr = Array(20).fill(null).map(elem => parseInt(Math.random() * 100));

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  var mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}
