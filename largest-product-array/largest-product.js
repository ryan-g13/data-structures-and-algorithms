'use strict';

function largestProduct(outArr) {
  const oLen = outArr.length;
  const iLen = outArr[0].length;
  let maxVal = 0;
  let rVal = 0;
  let bVal = 0;
  for (let i = 0; i < oLen; i++) {
    for (let j = 0; j < iLen; j++) {
      // Top Chunks
      if (i === 0) {
        if (j === 0) {
          rVal = outArr[i][j] * outArr[i][j + 1];
          bVal = outArr[i][j] * outArr[i + 1][j];
          maxVal = Math.max(rVal, bVal, maxVal);
        }
        if (j > 0 && j < iLen - 1) {
          // lVal = outArr[i][j] * outArr[i][j - 1];
          rVal = outArr[i][j] * outArr[i][j + 1];
          bVal = outArr[i][j] * outArr[i + 1][j];
          maxVal = Math.max(rVal, bVal, maxVal);
        }
        if (j === iLen - 1) {
          // lVal = outArr[i][j] * outArr[i][j - 1];
          bVal = outArr[i][j] * outArr[i + 1][j];
          maxVal = Math.max(rVal, bVal, maxVal);
        }
      }
      // Middle Chunks
      if (i > 0 && i < oLen - 1) {
        if (j === 0) {
          rVal = outArr[i][j] * outArr[i][j + 1];
          bVal = outArr[i][j] * outArr[i + 1][j];
          // tVal = outArr[i][j] * outArr[i - 1][j];
          maxVal = Math.max(rVal, bVal, maxVal);
        }
        if (j > 0 && j < iLen - 1) {
          // lVal = outArr[i][j] * outArr[i][j - 1];
          rVal = outArr[i][j] * outArr[i][j + 1];
          bVal = outArr[i][j] * outArr[i + 1][j];
          // tVal = outArr[i][j] * outArr[i - 1][j];
          maxVal = Math.max(rVal, bVal, maxVal);
        }
        if (j === iLen - 1) {
          // lVal = outArr[i][j] * outArr[i][j - 1];
          bVal = outArr[i][j] * outArr[i + 1][j];
          // tVal = outArr[i][j] * outArr[i - 1][j];
          maxVal = Math.max(rVal, bVal, maxVal);
        }
      }
      // Bottom Chunks
      if (i === oLen - 1) {
        if (j === 0) {
          rVal = outArr[i][j] * outArr[i][j + 1];
          // tVal = outArr[i][j] * outArr[i - 1][j];
          maxVal = Math.max(rVal, bVal, maxVal);
        }
        if (j > 0 && j < iLen - 1) {
          // lVal = outArr[i][j] * outArr[i][j - 1];
          rVal = outArr[i][j] * outArr[i][j + 1];
          // tVal = outArr[i][j] * outArr[i - 1][j];
          maxVal = Math.max(rVal, bVal, maxVal);
        }
      }
    }
  }
  return maxVal;
}

exports.largestProduct = largestProduct;
