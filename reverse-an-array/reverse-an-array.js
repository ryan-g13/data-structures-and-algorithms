function reverseArray(array) {
  const outputArr = new Array(array.length);
  for (let i = 0; i < array.length; i++) {
    outputArr[array.length - i] = array[i];
  }
  return outputArr;
}

reverseArray([11, 22, 33]);