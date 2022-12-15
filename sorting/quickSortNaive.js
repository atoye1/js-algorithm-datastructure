const quickSortNaive = (arr) => {
  if (arr.length <= 1) return arr;
  const left = [];
  const right = [];
  const mid = [arr[Math.floor(arr.length / 2)]]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mid[0]) {
      left.push(arr[i])
    } else if (arr[i] > mid[0]) {
      right.push(arr[i])
    } else {
      mid.push(arr[i])
    }
  }
  return [...quickSortNaive(left), ...mid, ...quickSortNaive(right)]
}

console.log(quickSortNaive([8, 20, 13, 3, 6, 7, 11, 33, 4, 5]));