'use strict';

function binarySearch(array, keyVal) {
  for (let i = 0; i < array.length; i++) {
    if (keyVal === array[i]) {
      return i;
    }
    if (i === array.length - 1) {
      return -1;
    }
  } return undefined;
}

exports.binarySearch = binarySearch;

//----------------------------------------------
// Stretch goals attempt
//----------------------------------------------
/*
  let mid = Math.floor(array.length / 2);
  let tempArr = [];
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (keyVal === array[mid] && mid === index) {
      return index;
    }
    if (keyVal < array[mid]) {
      tempArr = array.slice(0, mid);
      index += mid;
      mid = Math.floor(tempArr.length / 2);
    }
    if (keyVal > array[mid]) {
      tempArr = array.slice(mid);
      index -= mid;
      mid = Math.floor(tempArr.length / 2);
    }
    if (tempArr.length === 1 && keyVal !== tempArr[0]) {
      return -1;
    }
  }
}
*/
