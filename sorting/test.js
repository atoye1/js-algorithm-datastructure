const bubbleSort = require('./bubbleSort');
const selectionSort = require('./selectionSort');
const insertionSort = require('./insertionSort');
const mergeSort = require('./mergeSort');
const quickSort = require('./quickSort');

const compareArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

for (let i = 0; i < 10; i++) {
  let arr = Array(100).fill(null).map(elem => parseInt(Math.random() * 100));
  const selectionSortedArr = selectionSort(arr.slice());
  const bubbleSortedArr = bubbleSort(arr.slice());
  const insertionSortedArr = insertionSort(arr.slice());
  const mergeSortedArr = mergeSort(arr.slice());
  const quickSortedArr = quickSort(arr.slice());
  arr.sort((a, b) => a - b);
  console.assert(compareArrays(selectionSortedArr, arr), "selection sort error");
  console.assert(compareArrays(bubbleSortedArr, arr), "bubble sort error");
  console.assert(compareArrays(insertionSortedArr, arr), "insertion sort error");
  console.assert(compareArrays(mergeSortedArr, arr), "merge sort error");
  console.assert(compareArrays(quickSortedArr, arr), "quick sort error");
  console.assert(compareArrays(insertionSortedArr, bubbleSortedArr), "insertion, bubble sort error");
  console.assert(compareArrays(insertionSortedArr, selectionSortedArr), "insertion, selection sort error");
  console.assert(compareArrays(mergeSortedArr, selectionSortedArr), "merge, selection sort error");
}

for (let i = 0; i < 10; i++) {
  let arr = Array(100).fill(null).map(elem => parseInt(Math.random() * 100));
  const descending = (a, b) => b - a;
  const selectionSortedArr = selectionSort(arr.slice(), descending);
  const bubbleSortedArr = bubbleSort(arr.slice(), descending);
  const insertionSortedArr = insertionSort(arr.slice(), descending);
  const mergeSortedArr = mergeSort(arr.slice(), descending);
  const quickSortedArr = quickSort(arr.slice(), descending);
  arr.sort((a, b) => b - a);
  console.assert(compareArrays(selectionSortedArr, arr), "selection sort error");
  console.assert(compareArrays(bubbleSortedArr, arr), "bubble sort error");
  console.assert(compareArrays(insertionSortedArr, arr), "insertion sort error");
  console.assert(compareArrays(mergeSortedArr, arr), "merge sort error");
  console.assert(compareArrays(quickSortedArr, arr), "quick sort error");
  console.assert(compareArrays(insertionSortedArr, bubbleSortedArr), "insertion, bubble sort error");
  console.assert(compareArrays(insertionSortedArr, selectionSortedArr), "insertion, selection sort error");
  console.assert(compareArrays(bubbleSortedArr, selectionSortedArr), "bubble, selection sort error");
  console.assert(compareArrays(quickSortedArr, selectionSortedArr), "quick, selection sort error");
  console.assert(compareArrays(mergeSortedArr, selectionSortedArr), "merge, selection sort error");
}

for (let i = 0; i < 10; i++) {
  let arr = Array(100).fill(null).map(elem => parseInt(Math.random() * 100));
  const sortedArr = bubbleSort(arr).slice();
  arr.sort((a, b) => a - b).slice();
  console.assert(compareArrays(sortedArr, arr), "bubble sort error");
}

var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.log(selectionSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
console.log(selectionSort(moarKittyData)); // sorted by age in descending order