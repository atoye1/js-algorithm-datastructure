const bubbleSort = require('./bubbleSort');
const selectionSort = require('./selectionSort');
const insertionSort = require('./insertionSort');
const mergeSort = require('./mergeSort');
const quickSort = require('./quickSort');
const radixSort = require('./radixSort');

const dataArray = Array(10).fill(null).map(elem => Array(10).fill(null).map(elem => parseInt(Math.random() * 100)))
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

describe("test results should be identical with built-in sort method", () => {
  test.each(dataArray)("bubbleSort", () => {
    expect(bubbleSort([...arguments])).toEqual([...arguments].sort((a, b) => a - b));
  })
  test.each(dataArray)("selectionSort", (arr) => {
    expect(selectionSort([arguments])).toEqual([arguments].sort((a, b) => a - b));
  })
  test.each(dataArray)("insertionSort", (arr) => {
    expect(insertionSort([arguments])).toEqual([arguments].sort((a, b) => a - b));
  })
  test.each(dataArray)("mergeSort", (arr) => {
    expect(mergeSort([arguments])).toEqual([arguments].sort((a, b) => a - b));
  })
  test.each(dataArray)("quickSort", (arr) => {
    expect(quickSort([arguments])).toEqual([arguments].sort((a, b) => a - b));
  })
  test.each(dataArray)("radixSort", (arr) => {
    expect(radixSort([arguments])).toEqual([arguments].sort((a, b) => a - b));
  })
})

describe("test results with reversedCallback should be identical with built-in sort method", () => {
  let reverseCallback = (a, b) => b - a;
  let arr = Array(100).fill(null).map(elem => parseInt(Math.random() * 100));
  test("bubbleSort", () => {
    expect(bubbleSort([...arr], reverseCallback)).toEqual([...arr].sort((reverseCallback)));
  })
  test("selectionSort", () => {
    expect(selectionSort([...arr], reverseCallback)).toEqual([...arr].sort((reverseCallback)));
  })
  test("insertionSort", () => {
    expect(insertionSort([...arr], reverseCallback)).toEqual([...arr].sort((reverseCallback)));
  })
  test("mergeSort", () => {
    expect(mergeSort([...arr], reverseCallback)).toEqual([...arr].sort((reverseCallback)));
  })
  test("quickSort", () => {
    expect(quickSort([...arr], reverseCallback)).toEqual([...arr].sort((reverseCallback)));
  })
})

describe("test results with customCallback and array should be identical with built-in sort method", () => {
  var kitties = ["Johnny", "LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

  function strComp(a, b) {
    if (a < b) { return -1; }
    else if (a > b) { return 1; }
    return 0;
  }

  quickSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

  test("bubbleSort", () => {
    expect(bubbleSort([...kitties], strComp)).toEqual([...kitties].sort((strComp)));
  })
  test("selectionSort", () => {
    expect(selectionSort([...kitties], strComp)).toEqual([...kitties].sort((strComp)));
  })
  test("insertionSort", () => {
    expect(insertionSort([...kitties], strComp)).toEqual([...kitties].sort((strComp)));
  })
  test("mergeSort", () => {
    expect(mergeSort([...kitties], strComp)).toEqual([...kitties].sort((strComp)));
  })
  test("quickSort", () => {
    expect(quickSort([...kitties], strComp)).toEqual([...kitties].sort((strComp)));
  })
})

describe("test results with customCallback and object should be identical with built-in sort method", () => {
  test("bubbleSort", () => {
    expect(bubbleSort([...moarKittyData], oldestToYoungest)).toEqual([...moarKittyData].sort((oldestToYoungest)));
  })
  test("selectionSort", () => {
    expect(selectionSort([...moarKittyData], oldestToYoungest)).toEqual([...moarKittyData].sort((oldestToYoungest)));
  })
  test("insertionSort", () => {
    expect(insertionSort([...moarKittyData], oldestToYoungest)).toEqual([...moarKittyData].sort((oldestToYoungest)));
  })
  test("mergeSort", () => {
    expect(mergeSort([...moarKittyData], oldestToYoungest)).toEqual([...moarKittyData].sort((oldestToYoungest)));
  })
  test("quickSort", () => {
    expect(quickSort([...moarKittyData], oldestToYoungest)).toEqual([...moarKittyData].sort((oldestToYoungest)));
  })
})