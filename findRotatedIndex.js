function findRotatedIndex(arr, num, start = 0, end = arr.length - 1) {
  // add whatever parameters you deem necessary - good luck!
  if (start === end) {
    return arr[start] === num ? start : -1;
  }
  const mid = parseInt((start + end) / 2);
  if (arr[mid] === num) {
    return mid;
  } else if (arr[mid] > num) { // 중간이 기준보다 크므로 원래는 왼쪽을 탐색해야함
    if (arr[start] < arr[mid - 1] && arr[start] <= num) { // 좌측이 정렬된 배열이고 , 좌측의 최소값보다 기준이 크면 좌측을 탐색한다.
      return findRotatedIndex(arr, num, start = start, end = mid - 1);
    } else { // 아니라면 오른쪽을 탐색해야함
      return findRotatedIndex(arr, num, start = mid + 1, end = end)
    }
  } else { // 중간이 기준보다 작으므로 원래은 우측 탐색해야한다.
    if (arr[end] > arr[mid + 1] && arr[end] >= num) { // 우측이 정렬된 배열이고, 우측의 최댓값이 기준보다 크므로, 넘버는 우측에 위치한다.
      return findRotatedIndex(arr, num, start = mid + 1, end = end)
    } else { // 아니면 왼쪽을 탐색한다.
      return findRotatedIndex(arr, num, start = start, end = mid - 1);
    }
  }
}
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)) // 6
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2)
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)) // 5
// console.log(findRotatedIndex([3, 4, 1, 2], 4)) // 1
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 1