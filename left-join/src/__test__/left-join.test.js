'use strict';

import leftJoin from '../left-join';


const hash1 = new Map();
const hash2 = new Map();
const hash11 = new Map();
const hash22 = new Map();
const hash3 = new Map();
const hash4 = new Map();

hash4.set('fond', ['averse', 'enamored']);
hash4.set('wrath', ['delight', 'anger']);
hash4.set('diligent', ['idle', 'employed']);
hash4.set('guide', ['follow', null]);

hash3.set('fond', ['enamored', 'averse']);
hash3.set('wrath', ['anger', 'delight']);
hash3.set('diligent', ['employed', 'idle']);
hash3.set('outfit', ['garb', null]);

hash1.set('fond', ['enamored']);
hash1.set('wrath', ['anger']);
hash1.set('diligent', ['employed']);
hash1.set('outfit', ['garb']);

hash2.set('fond', ['averse']);
hash2.set('wrath', ['delight']);
hash2.set('diligent', ['idle']);
hash2.set('guide', ['follow']);


hash11.set('fond', ['enamored']);
hash11.set('wrath', ['anger']);
hash11.set('diligent', ['employed']);
hash11.set('outfit', ['garb']);

hash22.set('fond', ['averse']);
hash22.set('wrath', ['delight']);
hash22.set('diligent', ['idle']);
hash22.set('guide', ['follow']);


describe('This is a test suite to test a join function with a default value of left join', () => {
  const testLeft = leftJoin(hash1, hash2);
  test('Valid test passing a default join', () => {
    expect(testLeft).toEqual(hash3);
  });
  const testRight = leftJoin(hash11, hash22, 'right');
  test('Valid test passing a right join', () => {
    expect(testRight).toEqual(hash4);
  });
});
