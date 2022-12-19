const getDigit = (num, place) => {
  return Math.floor(num / Math.pow(10, i)) % 10;
}

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
}

const mostDigits = (arr) => {
  return arr.reduce((acc, cur, idx) => {
    return digitCount(cur) > acc ? digitCount(cur) : acc;
  }, 0)
}

const radixSort = (arr) => {
  const mostDigit = mostDigits(arr);
  for (let i = 0; i < mostDigit; i++) {
    let bucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      const bucketIdx = getDigit(arr[j], i);
      bucket[bucketIdx].push(arr[j]);
      console.log(bucket);
    }
    arr = bucket.flat();
  }
  return arr;
}


module.exports = radixSort;