'use strict';

const hash1 = new Map();
const hash2 = new Map();

hash1.set('fond', ['enamored']);
hash1.set('wrath', ['anger']);
hash1.set('diligent', ['employed']);
hash1.set('outfit', ['garb']);

hash2.set('fond', ['averse']);
hash2.set('wrath', ['delight']);
hash2.set('diligent', ['idle']);
hash2.set('guide', ['follow']);

const leftJoin = (mapLeft, mapRight, join) => {
  // const answerMap = new Map();
  if (join === 'right') {
    // mapRight.forEach((value, key) => {
    //   answerMap.set(key, value);
    // });
    mapRight.forEach((value, key) => {
      const currentVal = mapLeft.get(key);
      if (currentVal) {
        for (let i = 0; i < currentVal.length; i++) {
          value.push(currentVal[i]);
        }
      } else {
        value.push(null);
      }
    });
    return mapRight;
  } 
  // mapLeft.forEach((value, key) => {
  //   answerMap.set(key, value);
  // });
  mapLeft.forEach((value, key) => {
    const currentVal = mapRight.get(key);
    if (currentVal) {
      for (let i = 0; i < currentVal.length; i++) {
        value.push(currentVal[i]);
      }
    } else {
      value.push(null);
    }
  });
  return mapLeft;
};

export default leftJoin; 
