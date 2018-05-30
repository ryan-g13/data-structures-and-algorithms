'use strict';

const hashingAlg = (key) => {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash;
};

const repeatedWord = (string) => {
  if (string === '') {
    throw new Error('Invalid string please provide new input.');
  }
  if (typeof string !== 'string') {
    throw new Error('Invalid datatype please provide new string');
  }

  const wArray = string.replace(/(\.|,)/g, '').split(/\s/);
  const map = new Map();

  for (let i = 0; i < wArray.length; i++) {
    const object = map.get(wArray[i]);
    if (!object) {
      map.set(wArray[i], hashingAlg(wArray[i]));
    } else {
      return wArray[i];
    }
    if (i === wArray.length - 1) {
      return null;
    }
  }
  return undefined;
};

export default repeatedWord;
