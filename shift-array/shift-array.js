'use strict';

function insertShiftArray(inArr, value) {
  const insertIndex = Math.ceil(inArr.length / 2);
  const outputArr = [];
  for (let i = 0; i < inArr.length + 1; i++) {
    if (i < insertIndex) {
      outputArr[i] = inArr[i];
    }
    if (i === insertIndex) {
      outputArr[i] = value;
    }
    if (i > insertIndex) {
      outputArr[i] = inArr[i - 1];
    }
  }
  return outputArr;
}

exports.insertShiftArray = insertShiftArray;
